import logger from "@/lib/logger";
import { parseZodSchema } from "@/utils/utils";
import {
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import type { ZodType } from "zod";

export type SubmitHandler<T> = (data: T) => Promise<unknown>;

export function useForm<T extends Record<string, unknown>>(
  schema: ZodType<T>,
  initialData: T,
) {
  const [values, setValues] = useState<T>(initialData);
  const [pending, setIsPending] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof T, string>>
  >({});

  function handleFormFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function validateValuesOnSubmit() {
    const nonEmptyFields = Object.entries(values).reduce((prev, [key, val]) => {
      if (val == "") return prev;
      return { ...prev, [key]: val };
    }, {});
    const data = validateCurrentValues(nonEmptyFields);
    return data;
  }

  function handleSubmit(submitHandler: SubmitHandler<T>) {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = validateValuesOnSubmit();
      if (!data) return;
      setIsPending(true);
      submitHandler(data)
        .then(() => {
          setIsPending(false);
        })
        .catch(logger.error);
    };
  }

  const validateCurrentValues = useCallback(
    (formValues: unknown) => {
      const { data, error } = parseZodSchema(schema, formValues);
      setFormErrors(error ? error : {});
      return data;
    },
    [schema],
  );

  useEffect(() => {
    validateCurrentValues(values);
  }, [values, validateCurrentValues]);

  return {
    errors: formErrors,
    values,
    pending,
    handleFormFieldChange,
    handleSubmit,
  };
}

import { parseZodSchema } from "@/utils/utils";
import { useCallback, useEffect, useState, type ChangeEvent } from "react";
import type { ZodType } from "zod";

type obj = Record<string, unknown>;
export function useForm<T extends obj>(schema: ZodType<T>, initialData: T) {
  const [values, setValues] = useState<T>(initialData);

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

  function validateForm() {
    const nonEmptyFields = Object.entries(values).reduce((prev, [key, val]) => {
      if (val == "") return prev;
      return { ...prev, [key]: val };
    }, {});
    const data = validateValues(nonEmptyFields);
    return data;
  }

  const validateValues = useCallback(
    (formValues: unknown) => {
      const { data, error } = parseZodSchema(schema, formValues);
      setFormErrors(error ? error : {});
      return data;
    },
    [schema],
  );

  useEffect(() => {
    validateValues(values);
  }, [values, validateValues]);

  return {
    errors: formErrors,
    values,
    validateForm,
    handleFormFieldChange,
  };
}

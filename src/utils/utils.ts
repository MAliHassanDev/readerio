import { ZodType } from "zod";
export function parseZodSchema<T>(schema: ZodType<T>, data: unknown) {
  const result = schema.safeParse(data);
  if (result.success) return result;
  return {
    ...result,
    error: result.error.errors.reduce((acc, error) => {
      return {
        ...acc,
        [error.path[0] as keyof T]: error.message,
      };
    }, {}) as Record<keyof T, string>,
  };
}

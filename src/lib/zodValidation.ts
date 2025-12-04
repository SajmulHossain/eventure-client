import { ZodObject } from "zod";

export const zodValidator = <T>(data: T, schema: ZodObject) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues.map((issue) => {
        return {
          field: issue.path[0],
          message: issue.message,
        };
      }),
    };
  }
  return {
    success: true,
    data: result.data,
  };
};

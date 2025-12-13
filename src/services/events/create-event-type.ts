"use server";

import { serverFetch } from "@/lib/server-fetch";
import { redirect } from "next/navigation";
import z from "zod";

/* eslint-disable @typescript-eslint/no-explicit-any */

const eventTypeCreateZodSchema = z.object({
  name: z.string().min(3, { error: "Name should be at least 3 characters" }),
  description: z
    .string()
    .min(7, { error: "Description must be at least 7 characters" }),
});

export const createEventType = async (
  _state: any,
  formData: FormData
): Promise<any> => {
  try {
    const data = Object.fromEntries(formData);

    const isValidateData = eventTypeCreateZodSchema.safeParse(data);

    if (!isValidateData.success) {
      return {
        success: false,
        errors: isValidateData.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
        previouseData: data,
      };
    }

    const result = await serverFetch
      .post("/event-types", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isValidateData.data),
      })
      .then((res) => res.json());

    if (result.success) {
      redirect("/admin/dashboard/event-types");
    }

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      errors: [{ field: "general", message: "Failed to create event type" }],
    };
  }
};


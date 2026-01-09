/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import z from "zod";

const changePasswordZodSchema = z
  .object({
    oldPassword: z.string({ error: "Old password is required" }),
    newPassword: z
      .string({ error: "New password is required" })
      .min(6, { message: "New password must be at least 6 characters long" }),
    confirmPassword: z.string({ error: "Confirm password is required" })
      .min(1, { error: "Please confirm your new password" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const changePassword = async (
  _currentState: any,
  formData: FormData
): Promise<any> => {
  try {
    const passwordData = {
      oldPassword: formData.get("oldPassword"),
      newPassword: formData.get("newPassword"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const validatedData = changePasswordZodSchema.safeParse(passwordData);

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      };
    }

    const res = await serverFetch.patch("/auth/change-password", {
      body: JSON.stringify({
        oldPassword: validatedData.data.oldPassword,
        newPassword: validatedData.data.newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Failed to change password",
        errors: result.errors || [],
      };
    }

    return {
      success: true,
      message: result.message || "Password changed successfully",
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error,
      message: process.env.NODE_ENV === "development"
        ? error?.message
        : "Failed to change password",
    };
  }
};


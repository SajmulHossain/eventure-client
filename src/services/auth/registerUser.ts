"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";
import z from "zod";
import { loginUser } from "./loginUser";

const userRegisterZodSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(3, { error: "Name should atleast 3 characters" }),
  profile_photo: z.file({ error: "Profile Photo is required." }),
  bio: z
    .string({ error: "Bio is required" })
    .min(8, { error: "Bio should written atleast 8 characters." }),
  interests: z
    .array(z.string(), "Interests is required")
    .min(1, "Interests is required!"),
  location: z
    .string({ error: "Location is required" })
    .min(3, "Location should atleast 3 characters long."),
  email: z.email({ error: "Email is required" }),
  password: z
    .string({ error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: z.enum(["ADMIN", "HOST", "USER"], "Role is required!"),
});

export const registerUser = async (
  profile_photo: File,
  state: z.infer<typeof userRegisterZodSchema>,
  formData: FormData
): Promise<any> => {
  try {
    const data: any = Object.fromEntries(formData);
    const interests = data.interests
      .split(",")
      .map((i: string) => i.trim())
      .filter((i: string) => i !== "");
    console.log(interests);

    const isValidData = userRegisterZodSchema.safeParse({
      ...data,
      profile_photo,
      interests,
    });

    if (!isValidData.success) {
      return {
        errors: isValidData.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),

        previouseData: data,
      };
    }

    const { profile_photo: photo, ...rest } = isValidData.data;

    const newFormData = new FormData();

    const body = JSON.stringify(rest);

    newFormData.append("data", body);
    newFormData.append("file", photo);

    const result = await serverFetch
      .post("/auth/register", {
        body: newFormData,
      })
      .then((res) => res.json());

    if (result?.success) {
      await loginUser(state, formData);
    }

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      error,
      message:
        process.env.NODE_ENV === "development"
          ? error?.message
          : "Login Failed",
    };
  }
};

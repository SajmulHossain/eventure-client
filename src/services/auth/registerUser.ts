/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

const userRegisterZodSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(3, { error: "Name should atleast 3 characters" }),
  profile_photo: z.file({ error: "Profile Photo is required." }),
  bio: z
    .string({ error: "Bio is required" })
    .min(8, { error: "Bio should written atleast 20 characters." }),
  interests: z.array(z.string(), { error: "Interests are required" }),
  location: z
    .string({ error: "Location is required" })
    .min(3, "Location should atleast 3 characters long."),
  email: z.email({ error: "Email is required" }),
  password: z
    .string({ error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registerUser = async (
  profile_photo: File,
  state: z.infer<typeof userRegisterZodSchema>,
  formData: FormData
): Promise<any> => {
  const data: any = Object.fromEntries(formData);
  const interests = data.interests.split(",");

  const isValidData = userRegisterZodSchema.safeParse({
    profile_photo,
    interests,
    ...data
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
};

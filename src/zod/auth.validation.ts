import z from "zod";

export const loginZodSchema = z.object({
    email: z.email("Email is required"),
    password: z.string("Password is required").min(6, {error: "Password must be at least 6 characters"}),
})
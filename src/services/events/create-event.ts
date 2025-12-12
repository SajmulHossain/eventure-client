"use server";

import z from "zod";


/* eslint-disable @typescript-eslint/no-explicit-any */

const eventCreateZodSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  description: z.string().min(10, { message: "Description is required" }),
  date_and_time: z.date().min(new Date(), { message: "Date and time is required" }),
  location: z.string().min(3, { message: "Location is required" }),
  required_participants: z.number().min(1, { message: "Required participants is required" }),
  image_url: z.file({ error: "Image is required" }),
});
export const createEvent = async (photo: File, state: any, formData: FormData) : Promise<any> => {
  try {
    const data = Object.fromEntries(formData);
    console.log(data);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error,
    };
  }
};
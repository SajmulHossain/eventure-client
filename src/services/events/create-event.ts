/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidation";
import { EventStatus, IEvent } from "@/types";
import { redirect } from "next/navigation";
import z from "zod";

/* eslint-disable @typescript-eslint/no-explicit-any */

const eventCreateZodSchema = z.object({
  name: z.string().min(3, { error: "Name should atleast 3 characters" }),
  description: z
    .string()
    .min(7, { error: "Description must be atleast 7 characters" }),
  date_and_time: z.coerce
    .date()
    .min(new Date(), { error: "Date and time is required" }),
  location: z.string().min(3, { error: "Location is required" }),
  required_participants: z.coerce
    .number({ error: "Required participants is required" })
    .min(10, { error: "Minimum 10 needed" }),
  image_url: z.file({ error: "Image is required" }),
  joinning_fee: z.coerce
    .number({ error: "Joinning fee is required" })
    .min(50, { error: "Joinning Fee must be minimum 50 tk" }),
  status: z
    .enum(Object.values(EventStatus), { error: "Status is required" })
    .default(EventStatus.OPEN),
  type: z.string({ error: "Type is required" }),
  host_id: z.string().min(1, { error: "Host id is required" }),
  joinedParticipants: z.number().optional(),
});

export const createEvent = async (
  photo: File,
  _state: any,
  formData: FormData
): Promise<any> => {
  try {
    const data = Object.fromEntries(formData);

    const isValidateData = eventCreateZodSchema.safeParse({...data, image_url: photo});

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

    const { image_url, ...rest } = isValidateData.data;

    const newFormData = new FormData();

    newFormData.append("data", JSON.stringify(rest));
    newFormData.append("file", image_url);

    const result = await serverFetch
      .post("/events", {
        body: newFormData,
      })
      .then((res) => res.json());

    if (result.success) {
      redirect("/host/dashboard/events");
    }

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return error;
  }
};

"use server";

import { serverFetch } from "@/lib/server-fetch";
import { IEventType } from "@/types";

export const getAllEventTypes = async (): Promise<IEventType[]> => {
  try {
    const res = await serverFetch.get("/event-types");
    const result = await res.json();

    return result.data as IEventType[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

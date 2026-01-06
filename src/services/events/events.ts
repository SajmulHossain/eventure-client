import { serverFetch } from "@/lib/server-fetch";
import { IEvent } from "@/types";

export const getAllEvents = async (): Promise<IEvent[]> => {
  try {
    const res = await serverFetch.get("/events");
    const result = await res.json();
    return result.data as IEvent[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

import { serverFetch } from "@/lib/server-fetch";
import { IEvent } from "@/types";

export const getEvent = async (id: string): Promise<IEvent | null> => {
  try {
    const res = await serverFetch.get(`/events/${id}`);
    const json = await res.json();
    return json.data as IEvent;
  } catch (err) {
    console.error(err);
    return null;
  }
};

import { serverFetch } from "@/lib/server-fetch";
import { IEvent } from "@/types";

export const getEventsByUserId = async (userId: string): Promise<IEvent[]> => {
  try {
    const res = await serverFetch.get(`/events/user/${userId}`);
    const result = await res.json();
    return result.data as IEvent[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getHostedEventsByUserId = async (
  userId: string
): Promise<IEvent[]> => {
  try {
    const res = await serverFetch.get(`/events/host/${userId}`);
    const result = await res.json();
    return result.data as IEvent[];
  } catch (error) {
    console.log(error);
    return [];
  }
};


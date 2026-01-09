import { serverFetch } from "@/lib/server-fetch";

export const getSaveEvent = async (id: string): Promise<boolean> => {
  try {
    const res = await serverFetch.get(`/saved-events/${id}`, {
      next: { tags: ["SAVED_EVENT_STATUS"] },
    });
    const result = await res.json();
    return result?.data as boolean;
  } catch (error) {
    console.log(error);
    return false;
  }
};
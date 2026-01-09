"use server";

import { serverFetch } from "@/lib/server-fetch";
import { revalidateTag } from "next/cache";

export const saveEvent = async (id: string) => {
  try {
    const res = await serverFetch.post("/saved-events", {
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    revalidateTag("SAVED_EVENT_STATUS", { expire: 0 });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

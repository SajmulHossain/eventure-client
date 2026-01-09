"use server";

import { serverFetch } from "@/lib/server-fetch";
import { IEvent } from "@/types";

export default async function () {
      try {
        const res = await serverFetch.get("/events/my-events");
        const result = await res.json();
        return result.data as IEvent[];
      } catch (error) {
        console.log(error);
        return [];
      }    
}
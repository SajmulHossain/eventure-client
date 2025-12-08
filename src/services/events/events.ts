import { serverFetch } from "@/lib/server-fetch"

export const getEvents = async () => {
 const res = await serverFetch.get("/events");
 return await res.json();
}
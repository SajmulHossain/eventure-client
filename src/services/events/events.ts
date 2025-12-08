import { serverFetch } from "@/lib/server-fetch"

export const getEvents = async () => {
   try {
     const res = await serverFetch.get("/events");
    return await res.json();
   } catch (error) {
    console.log(error);
    return {
        success: false,
        message: "Events fetching failed!"
    }
   }
}
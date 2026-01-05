import { serverFetch } from "@/lib/server-fetch";
import { IEvent } from "@/types";

export const getFeaturedEvents = async () => {
    try {
        const res = await serverFetch.get("/events?limit=3", {
            next: {
                tags: ["FEATURED_EVENTS"],
            }
        });
        const result = await res.json();
        return result.data as IEvent[];
    } catch (error) {
        console.log(error);
        return [];
    }
};
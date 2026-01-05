import { serverFetch } from "@/lib/server-fetch";

export const handleJoinEvent = async (id: string) => {
    try {
        const res = await serverFetch.get(`/events/${id}/join`);
        const result = await res.json();
        return result.data as { success: boolean };
    } catch (error) {
        console.log(error);
        return {
            success: false
        };
    }
}
import { serverFetch } from "@/lib/server-fetch";
import { IUser } from "@/types";

export const getAllHosts = async (): Promise<IUser[]> => {
    try {
        const res = await serverFetch.get("/user/hosts");
        const result = await res.json();
        return result.data as IUser[];
    } catch (error) {
        console.log(error);
        return [];
    }
}
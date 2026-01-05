import { serverFetch } from "@/lib/server-fetch";
import { IUser } from "@/types";

export const getAllUsers = async (): Promise<IUser[]> => {
    try {
        const res = await serverFetch.get("/user/users");
        const result = await res.json();
        return result.data as IUser[];
    } catch (error) {
        console.log(error);
        return [];
    }
}
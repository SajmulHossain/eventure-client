import { serverFetch } from "@/lib/server-fetch";
import { IUser } from "@/types/user.interface";

export const getAllAdmins = async (): Promise<IUser[]> => {
    try {
        const res = await serverFetch.get("/user/admins");
        const result = await res.json();
        return result.data as IUser[];
    } catch (error) {
        console.log(error);
        return [];
    }
}
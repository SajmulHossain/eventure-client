import { serverFetch } from "@/lib/server-fetch";
import { IUser } from "@/types";

export const getSingleUser = async (id: string): Promise<IUser | null> => {
  try {
    const res = await serverFetch.get("/user/" + id).then((res) => res.json());

    return res.data as IUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

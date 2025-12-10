/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { getCookie } from "./token";
import { IUser } from "@/types";

export const getMe = async() : Promise<IUser | any> => {
    try {
      const res = await serverFetch.get("/auth/me", {
        next: {tags: ["ME"]},
      })

      const result = await res.json();

        if (result.success) {
          const accessToken = await getCookie("accessToken");

          if (!accessToken) {
            throw new Error("No access token found");
          }
        }

        return result.data as IUser;
    } catch (error) {
        console.log(error);
        return null;
    }
}
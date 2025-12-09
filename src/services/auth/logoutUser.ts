"use server";

import { deleteCookie } from "./token";

export const logoutUser = async() => {
    await deleteCookie();
}
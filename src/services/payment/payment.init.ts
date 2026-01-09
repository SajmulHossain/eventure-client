"use server";

import { serverFetch } from "@/lib/server-fetch";

export const initPayment = async (id: string) => {
    try {
       const res = await serverFetch.post(`/payments/create-intent/${id}`, {
            body: JSON.stringify({}),
            headers: { "Content-Type": "application/json" },
        })

        const result = await res.json();
        console.log(result.data)
        return result.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { IMeta, IParams, IPayment, IResponse, ReturnType } from "@/types";

export default async function getAllPayments(
  params: any
): Promise<ReturnType<IPayment[]>> {
  try {
    const res = await serverFetch.get("/payments?" + params);
    const result = await res.json();
    return {
      data: result.data as IPayment[],
      meta: result.meta as IMeta,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      meta: { total: 0, page: 1, limit: 10, totalPage: 0 },
    };
  }
}

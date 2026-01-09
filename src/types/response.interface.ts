/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMeta {
  total: number;
  page: number;
  limit: number;
  totalPage: number;
}

export interface IResponse<T> {
  status: boolean;
  data: T;
  message: string;
  meta?: IMeta;
}

export interface ReturnType<T> {
  data: T,
  meta?: IMeta
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IResponse<T> {
  status: boolean;
  data: T;
  message: string;
  meta: any;
}

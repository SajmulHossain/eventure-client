import { IEvent } from "./event.interface";
import { IUser } from "./user.interface";

export enum PAYMET_STATUS {
  PAID = "PAID",
  UNPAID = "UNPAID",
  CANCELD = "CANCELED",
  FAILED = "FAILED",
}

export interface IPayment {
  event: IEvent;
  transactionId: string;
  amount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paymentGatwayData?: any;
  user: IUser;
  status: PAYMET_STATUS;
  createdAt: Date;
  updatedAt: Date;
}

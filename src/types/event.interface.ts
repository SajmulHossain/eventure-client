import { IEventType } from "./event-type.interface";
import { IUser } from "./user.interface";

export interface IEvent {
  _id?: string;
  name: string;
  description: string;
  date_and_time: Date;
  location: string;
  required_participants: number;
  image_url?: string;
  joinning_fee: number;
  status: EventStatus;
  type: IEventType;
  host_id: IUser;
  joinedParticipants: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum EventStatus {
  OPEN = "OPEN",
  FULL = "FULL",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

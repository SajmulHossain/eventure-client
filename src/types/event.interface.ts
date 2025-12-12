export interface IEvent {
  name: string;
  description: string;
  date_and_time: Date;
  location: string;
  required_participants: number;
  image_url?: string;
  joinning_fee: number;
  status: EventStatus;
  type: string;
}

export enum EventStatus {
  OPEN = "OPEN",
  FULL = "FULL",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

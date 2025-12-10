export type UserRole = "ADMIN" | "USER" | "HOST";

export interface IUser {
  _id?: string;
  name: string;
  profile_photo: string;
  bio: string;
  interests: string[];
  location: string;
  auths: IAuthProvider[];
  role: UserRole;
  email: string;
}

export interface IAuthProvider {
  provider: "google" | "credentials";
  providerId: string;
}
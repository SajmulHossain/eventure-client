import { serverFetch } from "@/lib/server-fetch";

export interface IReview {
  _id?: string;
  user: {
    _id: string;
    name: string;
    profile_photo: string;
  };
  rating: number;
  comment: string;
  createdAt?: string;
}

export const getUserReviews = async (userId: string): Promise<IReview[]> => {
  try {
    const res = await serverFetch.get(`/user/${userId}/reviews`);
    const result = await res.json();
    return result.data as IReview[];
  } catch (error) {
    console.log(error);
    return [];
  }
};


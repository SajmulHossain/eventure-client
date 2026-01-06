import { serverFetch } from "@/lib/server-fetch";

export const getReviews = async (eventId: string) => {
  try {
    const res = await serverFetch.get(`/events/${eventId}/reviews`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const postReview = async (eventId: string, payload: { rating: number; comment: string }) => {
  try {
    const res = await serverFetch.post(`/events/${eventId}/reviews`, {
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

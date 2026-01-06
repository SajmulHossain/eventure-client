"use client";

import React, { useEffect, useState } from "react";

interface Review {
  _id?: string;
  user?: { name?: string; _id?: string };
  rating: number;
  comment: string;
  createdAt?: string;
}

interface Props {
  eventId: string;
}

const Reviews: React.FC<Props> = ({ eventId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/events/${eventId}/reviews`);
        if (res.ok) {
          const json = await res.json();
          setReviews(json.data || []);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error(err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [eventId]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/events/${eventId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment }),
      });

      if (res.ok) {
        const json = await res.json();
        setReviews((r) => [json.data, ...r]);
        setComment("");
        setRating(5);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium">Reviews</h3>

      <form onSubmit={submit} className="space-y-2 mt-3">
        <div className="flex items-center gap-2">
          <label className="text-sm">Rating</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="select w-24">
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
        </div>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="textarea w-full" placeholder="Share your experience..." />
        <div>
          <button className="btn" type="submit">Submit Review</button>
        </div>
      </form>

      <div className="mt-4 space-y-3">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading reviews...</p>
        ) : !reviews.length ? (
          <p className="text-sm text-muted-foreground">No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <div key={r._id} className="border rounded p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium">{r.user?.name || "Anonymous"}</div>
                <div className="text-sm text-muted-foreground">{r.createdAt ? new Date(r.createdAt).toLocaleDateString() : ""}</div>
              </div>
              <div className="text-sm">Rating: {r.rating} / 5</div>
              <p className="mt-2 text-sm">{r.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;

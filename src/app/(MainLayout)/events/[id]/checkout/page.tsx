"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CheckoutPage: React.FC<{ params?: { id?: string } }> = ({ params }) => {
  const router = useRouter();
  const eventId = params?.id || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Try to create payment intent (backend must implement)
      const res = await fetch(`/api/payments/create-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId }),
      });

      if (res.ok) {
        // Redirect to a success page for now
        router.push(`/events/${eventId}/checkout/success`);
      } else {
        router.push(`/events/${eventId}/checkout/cancel`);
      }
    } catch (err) {
      console.error(err);
      router.push(`/events/${eventId}/checkout/cancel`);
    }
  };

  return (
    <div className="page">
      <h2 className="text-xl font-medium mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm">Cardholder name</label>
          <input required className="input w-full" />
        </div>

        <div>
          <label className="block text-sm">Card details (simulated)</label>
          <input required className="input w-full" placeholder="4242 4242 4242 4242" />
        </div>

        <div>
          <button className="btn btn-primary" type="submit">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

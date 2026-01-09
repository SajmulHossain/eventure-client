"use client";

import { useState } from "react";
import { IEvent } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  MapPin, 
  Ticket,
  Loader2, 
  ArrowRight,
  User 
} from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { toast } from "sonner";
import getDefaultImageUrl from "@/constant/getDefaultImageUrl";
import { initPayment } from "@/services/payment/payment.init";

export default function CheckoutCard({ event }: { event: IEvent }) {
    const [isLoading, setIsLoading] = useState(false);

  const availableSeats = event.required_participants - (event.joinedParticipants?.length || 0);

  const handlePayment = async () => {
    setIsLoading(true);
    const toastId = toast.loading("Processing your request...");

    try {
      const result =await initPayment(event._id || "");
      console.log(result)
    } catch (error) {
        console.log(error)
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
        setIsLoading(false);
        toast.dismiss(toastId);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-black text-slate-900 mb-10 tracking-tight">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-sm border border-slate-100">
              <Image
                src={event.image_url || getDefaultImageUrl()}
                alt={event.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">{event.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{format(new Date(event.date_and_time), "PPP p")}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-medium line-clamp-1">{event.location}</span>
                </div>
              </div>
            </div>

            <Separator className="bg-slate-100" />

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                <Ticket className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Ticket Availability</p>
                <p className="text-lg font-bold text-slate-900">{availableSeats} Seats left out of {event.required_participants}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-8 border-2 border-slate-900 rounded-[2.5rem] sticky top-8 shadow-2xl shadow-slate-100">
              <div className="flex items-center gap-2 mb-8">
                <User className="h-5 w-5" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Summary</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-slate-600">
                  <span className="font-medium text-lg">Single Ticket</span>
                  <span className="font-bold text-slate-900">৳{event.joinning_fee}</span>
                </div>

                <Separator className="my-6" />

                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Total Payable</p>
                  <div className="flex justify-between items-end">
                    <span className="text-4xl font-black text-slate-900">৳{event?.joinning_fee}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                disabled={isLoading}
                className="w-full h-16 mt-10 bg-slate-900 hover:bg-slate-800 text-xl font-bold rounded-2xl transition-all active:scale-[0.98]"
              >
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  <span className="flex items-center gap-2">
                    Pay Now <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </Button>
              
              <p className="mt-6 text-[11px] text-center text-slate-400 font-medium leading-relaxed">
                By clicking "Pay Now", you agree to join the event and follow the host's guidelines.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
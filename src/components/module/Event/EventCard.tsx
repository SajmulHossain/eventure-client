"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { saveEvent } from "@/services/savedEvents/saveEvent";
import { set } from "zod";
import { is } from "zod/v4/locales";

interface EventCardProps {
  event: IEvent;
  onSave?: (eventId: string) => Promise<any>;
  isSaved?: boolean;
}

export const EventCard = ({ event, onSave, isSaved }: EventCardProps) => {
  const [isSuccess, setIsSuccess] = useState(isSaved);

  const defaultImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800";
  const eventDate = new Date(event.date_and_time || new Date());

  const handleSave = async(e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSuccess(!isSuccess);
    const id = toast.loading("Saving event...");

   try {
     const res= await saveEvent(event._id || "");
      if(res.success){
        toast.success(`Event ${isSuccess ? "unsaved" : "saved"} successfully!`, { id });
      } else {
        setIsSuccess(!isSuccess);
        toast.error(res.message || "Failed to save event.", { id });
      }
    } catch (error: any) {
      setIsSuccess(!isSuccess);
     toast.error(error?.message || "Failed to save event.", { id });
   }
    
  };

  return (
    <Link href={`/events/${event._id}`}>
      <Card className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={event.image_url || defaultImage}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Top Badges & Actions */}
          <div className="absolute inset-0 p-3 flex justify-between items-start bg-linear-to-t from-black/20 to-transparent">
            <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm hover:bg-white border-none font-bold">
              ৳{event.joinning_fee}
            </Badge>

            <Button
              size="icon"
              variant="secondary"
              className={`h-8 w-8 rounded-full border-none shadow-sm transition-all backdrop-blur-md ${
                isSuccess 
                ? "bg-red-500 text-white hover:bg-red-600" 
                : "bg-white/70 text-slate-700 hover:bg-white hover:text-red-500"
              }`}
              onClick={handleSave}
            >
              <Heart className={`h-4 w-4 ${isSuccess ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-2">
            <Calendar className="h-3 w-3" />
            {format(eventDate, "MMM dd • h:mm a")}
          </div>
          
          <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors text-lg">
            {event.name}
          </h3>
          
          <div className="mt-2 flex items-center gap-1 text-slate-500">
            <MapPin className="h-3 w-3 shrink-0 text-slate-400" />
            <span className="text-xs truncate font-medium">{event.location}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
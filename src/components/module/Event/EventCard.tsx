"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types";
import { format } from "date-fns";

export const EventCard = ({ event }: { event: IEvent }) => {
    const defaultImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800";
  const eventDate = new Date(event.date_and_time || new Date());

  return (
    <Link href={`/events/${event._id}`}>
      <Card className="group overflow-hidden rounded-xl border-none bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={event.image_url || defaultImage}
            alt={event.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-white/90 text-slate-900 backdrop-blur-sm hover:bg-white">
            ৳{event.joinning_fee}
          </Badge>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 mb-2">
            <Calendar className="h-3 w-3" />
            {format(eventDate, "MMM dd, yyyy • h:mm a")}
          </div>
          
          <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {event.name}
          </h3>
          
          <div className="mt-2 flex items-center gap-1 text-slate-500">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="text-xs truncate">{event.location}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
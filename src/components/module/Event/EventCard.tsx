"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IEvent, EventStatus } from "@/types";
import { format } from "date-fns";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
} from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  event: IEvent;
  onJoin?: (eventId: string) => void;
  onSave?: (eventId: string) => void;
  showSaveButton?: boolean;
  className?: string;
}

const getStatusBadgeVariant = (status: EventStatus) => {
  switch (status) {
    case EventStatus.OPEN:
      return "default";
    case EventStatus.FULL:
      return "secondary";
    case EventStatus.CANCELLED:
      return "destructive";
    case EventStatus.COMPLETED:
      return "outline";
    default:
      return "default";
  }
};

const getStatusBadgeColor = (status: EventStatus) => {
  switch (status) {
    case EventStatus.OPEN:
      return "bg-emerald-500/90 text-white border-none";
    case EventStatus.FULL:
      return "bg-orange-500/90 text-white border-none";
    case EventStatus.CANCELLED:
      return "bg-red-500/90 text-white border-none";
    case EventStatus.COMPLETED:
      return "bg-slate-500/90 text-white border-none";
    default:
      return "";
  }
};

export const EventCard = ({
  event,
  onJoin,
  onSave,
  showSaveButton = true,
  className = "",
}: EventCardProps) => {
  const eventDate = new Date(event.date_and_time || new Date());
  const formattedDate = format(eventDate, "EEE, MMM dd");
  const formattedTime = format(eventDate, "h:mm a");
  const participantsPercentage = Math.round(
    (event.joinedParticipants / event.required_participants) * 100
  );

  const defaultImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800";

  return (
    <Card
      className={`group relative w-full overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {/* Image Section */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={event.image_url || defaultImage}
          alt={event.name}
          fill
          className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          <Badge className="bg-white/20 text-white backdrop-blur-md border-white/20 hover:bg-white/30">
            {event.type.name}
          </Badge>
          <Badge
            variant={getStatusBadgeVariant(event.status)}
            className={`${getStatusBadgeColor(event.status)} backdrop-blur-md`}
          >
            {event.status}
          </Badge>
        </div>

        {showSaveButton && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onSave?.(event._id || "")}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-red-400 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save event</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-100">
              {formattedDate} • {formattedTime}
            </span>
          </div>
        </div>
      </div>

      <CardHeader className="p-5 pb-3">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {event.name}
          </h3>
          <div className="flex flex-col items-end shrink-0">
            <span className="text-lg font-bold text-indigo-600">
              ৳{event.joinning_fee}
            </span>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
              per person
            </span>
          </div>
        </div>

        <CardDescription className="text-sm text-slate-600 line-clamp-2">
          {event.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-0 space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-700">{event.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-slate-400 shrink-0" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-slate-700">
                Participants
              </span>
              <span className="text-xs font-medium text-slate-500">
                {event.joinedParticipants} / {event.required_participants}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(participantsPercentage, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <div className="flex items-center justify-between w-full border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">
              {participantsPercentage}% filled
            </span>
          </div>

          <Button
            onClick={() => onJoin?.(event._id || "")}
            className="rounded-full bg-slate-900 px-6 hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40"
            disabled={event.status === EventStatus.FULL || event.status === EventStatus.CANCELLED}
          >
            {event.status === EventStatus.FULL
              ? "Full"
              : event.status === EventStatus.CANCELLED
                ? "Cancelled"
                : "Join Event"}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IEvent, EventStatus } from "@/types";
import { format } from "date-fns";
import {
  MoreVertical,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { getNameLetters } from "@/lib/getNameLetters";

interface EventsTableProps {
  events: IEvent[];
  onEdit?: (eventId: string) => void;
  onDelete?: (eventId: string) => void;
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
      return "outline";
  }
};

export const EventsTable = ({ events=[], onEdit, onDelete }: EventsTableProps) => {

  const getCapacityPercentage = (joined: number, required: number): number => {
    return Math.min((joined / required) * 100, 100);
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>No events found</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Event</TableHead>
            <TableHead>Host</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Participants</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Status</TableHead>
            {(onEdit || onDelete) && <TableHead className="text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => {
            const capacityPercentage = getCapacityPercentage(
              event.joinedParticipants?.length || 0,
              event.required_participants
            );
            const eventDate = new Date(event.date_and_time);

            return (
              <TableRow key={event._id} className="hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-md overflow-hidden shrink-0">
                      {event.image_url ? (
                        <Image
                          src={event.image_url}
                          alt={event.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium line-clamp-1">{event.name}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {event?.type?.name || "No Type"}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        className="object-cover"
                        src={event?.host_id?.profile_photo}
                      />
                      <AvatarFallback className="text-xs">
                        {getNameLetters(event.host_id?.name || "")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm line-clamp-1">
                      {event.host_id?.name || "Unknown Host"}
                    </span>
                  </div>
                </TableCell>

                {/* Date & Time */}
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{format(eventDate, "dd MMM, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{format(eventDate, "h:mm a")}</span>
                    </div>
                  </div>
                </TableCell>

                {/* Location */}
                <TableCell>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </TableCell>

                {/* Participants */}
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {event?.joinedParticipants?.length || 0} /{" "}
                        {event.required_participants}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          capacityPercentage >= 100
                            ? "bg-destructive"
                            : capacityPercentage >= 80
                            ? "bg-yellow-500"
                            : "bg-primary"
                        }`}
                        style={{ width: `${capacityPercentage}%` }}
                      />
                    </div>
                  </div>
                </TableCell>

                {/* Fee */}
                <TableCell>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>৳{event.joinning_fee}</span>
                  </div>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(event.status)}>
                    {event.status}
                  </Badge>
                </TableCell>

                {/* Actions */}
                {
                  (onDelete || onEdit) && <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {onEdit && (
                        <DropdownMenuItem
                          onClick={() => onEdit(event._id || "")}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Event
                        </DropdownMenuItem>
                      )}
                      {onDelete && (
                        <DropdownMenuItem
                          onClick={() => onDelete(event._id || "")}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Event
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                }
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

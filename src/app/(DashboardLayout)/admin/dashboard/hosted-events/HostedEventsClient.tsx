"use client";

import { EventsTable } from "@/components/shared/EventsTable";
import deleteEvent from "@/services/events/deleteEvent";
import { IEvent } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function HostedEventsClient({ events }: { events: IEvent[] }) {
  const router = useRouter();

  const handleDelete = async (eventId: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      const result = await deleteEvent(eventId);

      if (result.success) {
        toast.success("Event deleted successfully", { id: toastId });
        router.refresh();
      } else {
        toast.error(result.message || "Failed to delete event", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event", { id: toastId });
    }
  };
  return <EventsTable events={events} onDelete={handleDelete} />;
}

export default HostedEventsClient;

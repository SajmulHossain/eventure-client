"use client";

import { EventsTable } from "@/components/shared/EventsTable";
import { IEvent } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface EventsPageClientProps {
  events: IEvent[];
}

export const EventsPageClient = ({ events }: EventsPageClientProps) => {
  const router = useRouter();

  const handleEdit = (eventId: string) => {
    // Navigate to edit page - adjust route as needed
    router.push(`/admin/dashboard/events/${eventId}/edit`);
    toast.info("Redirecting to edit page...");
  };

  const handleDelete = async (eventId: string) => {
    if (!confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
      return;
    }

    try {
      // TODO: Implement delete API call
      // const response = await fetch(`/api/events/${eventId}`, {
      //   method: "DELETE",
      // });
      // const result = await response.json();
      
      // if (result.success) {
      //   toast.success("Event deleted successfully");
      //   router.refresh();
      // } else {
      //   toast.error(result.message || "Failed to delete event");
      // }
      
      toast.info("Delete functionality will be implemented with API endpoint");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    }
  };

  return (
    <EventsTable
      events={events}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};


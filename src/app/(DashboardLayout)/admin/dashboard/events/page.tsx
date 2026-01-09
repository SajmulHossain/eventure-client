import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { EventsPageClient } from "./EventsPageClient";
import { getAllEvents } from "@/services/events/events";
import { TableSkeleton } from "@/components/shared/skeletons";

const EventsContent = async () => {
  const events = await getAllEvents();

  return (
    <>
      <PageHeader
        title="All Events"
        description="View and manage all events in the system"
        rightContent={
          <Badge variant="outline" className="text-sm">
            Total: {events?.length || 0} events
          </Badge>
        }
        className="mb-8"
      />
      <EventsPageClient events={events} />
    </>
  );
};

const AllEventsPage = () => {
  return (
    <section className="page">
      <Suspense fallback={<TableSkeleton rows={8} cols={8} />}>
        <EventsContent />
      </Suspense>
    </section>
  );
};

export default AllEventsPage;
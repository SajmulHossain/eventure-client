import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { EventsPageClient } from "./EventsPageClient";
import { getAllEvents } from "@/services/events/events";

const AllEventsPage = async () => {
  const events = await getAllEvents();

  return (
    <section className="page">
      <PageHeader
        title="All Events"
        description="View and manage all events in the system"
        rightContent={
          <Badge variant="outline" className="text-sm">
            Total: {events?.length} events
          </Badge>
        }
        className="mb-8"
      />

      <EventsPageClient events={events} />
    </section>
  );
};

export default AllEventsPage;
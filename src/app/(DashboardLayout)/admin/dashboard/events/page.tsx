import { Badge } from "@/components/ui/badge";
import { getEvents } from "@/services/events/events";
import { PageHeader } from "@/components/shared/PageHeader";
import { EventsPageClient } from "./EventsPageClient";

const AllEventsPage = async () => {
  const events = await getEvents();

  return (
    <section className="page">
      <PageHeader
        title="All Events"
        description="View and manage all events in the system"
        rightContent={
          <Badge variant="outline" className="text-sm">
            Total: {events.length} events
          </Badge>
        }
        className="mb-8"
      />

      <EventsPageClient events={events} />
    </section>
  );
};

export default AllEventsPage;


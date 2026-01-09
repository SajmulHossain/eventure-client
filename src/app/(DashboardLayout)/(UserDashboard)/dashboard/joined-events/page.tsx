import { EventsTable } from "@/components/shared/EventsTable";
import getUpcomingEvents from "@/services/events/getUpcomingEvents";

async function UpcomingEventsPage() {
    const events = await getUpcomingEvents();
  return (
    <section className="page"> 
      <EventsTable events={events} />
    </section>
  );
}

export default UpcomingEventsPage;

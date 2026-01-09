import { EventsTable } from "@/components/shared/EventsTable";
import getCompletedEvents from "@/services/events/getCompletedEvents";

async function PastEvents() {
    const events = await getCompletedEvents();
  return (
    <section className="page"> 
      <EventsTable events={events} />
    </section>
  );
}

export default PastEvents;
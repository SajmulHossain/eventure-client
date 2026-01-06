import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import { getAllEvents } from "@/services/events/events";

const EventsPage = async () => {
  const events = await getAllEvents();
  return (
    <section className="page">
      {events.length ? (
        events.map((event) => <EventCard key={event?._id} event={event} />)
      ) : (
        <NoDataFound />
      )}
    </section>
  );
};

export default EventsPage;

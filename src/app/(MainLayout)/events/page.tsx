import NoDataFound from "@/components/shared/NoDataFound";
import { getAllEvents } from "@/services/events/events";
import { EventCard } from "@/components/module/Event/EventCard";
import { getSaveEvent } from "@/services/savedEvents/getSaveStatus";

const EventsPageWrapper = async () => {
  const events = await getAllEvents();
  return (
    <section className="page">
      {events.length ? (
        events.map(async (event) => {
          console.log(event?._id)
          const isSaved = await getSaveEvent(event?._id || "") || false;
          return <EventCard event={event} key={event?._id} isSaved={isSaved} />
        })
      ) : (
        <NoDataFound />
      )}
    </section>
  );
};

export default EventsPageWrapper;

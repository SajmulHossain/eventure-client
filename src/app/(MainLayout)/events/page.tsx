import NoDataFound from "@/components/shared/NoDataFound";
import { getAllEvents } from "@/services/events/events";
import { EventCard } from "@/components/module/Event/EventCard";
import { getSaveEvent } from "@/services/savedEvents/getSaveStatus";

const EventsPageWrapper = async () => {
  const events = await getAllEvents();
  return (
    <section className="page">
      {events.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map(async (event) => {
            const isSaved = (await getSaveEvent(event?._id || "")) || false;
            return (
              <EventCard event={event} key={event?._id} isSaved={isSaved} />
            );
          })}
        </div>
      ) : (
        <NoDataFound />
      )}
    </section>
  );
};

export default EventsPageWrapper;

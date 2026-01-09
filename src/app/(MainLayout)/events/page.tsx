import { Suspense } from "react";
import NoDataFound from "@/components/shared/NoDataFound";
import { getAllEvents } from "@/services/events/events";
import { EventCard } from "@/components/module/Event/EventCard";
import { getSaveEvent } from "@/services/savedEvents/getSaveStatus";
import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

const EventsList = async () => {
  const events = await getAllEvents();
  
  if (!events.length) {
    return <NoDataFound />;
  }

  const eventsWithSavedStatus = await Promise.all(
    events.map(async (event) => {
      const isSaved = (await getSaveEvent(event?._id || "")) || false;
      return { event, isSaved };
    })
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {eventsWithSavedStatus.map(({ event, isSaved }) => (
        <EventCard event={event} key={event?._id} isSaved={isSaved} />
      ))}
    </div>
  );
};

const EventsPageWrapper = () => {
  return (
    <section className="page">
      <Suspense fallback={<EventCardSkeletonGrid count={6} />}>
        <EventsList />
      </Suspense>
    </section>
  );
};

export default EventsPageWrapper;

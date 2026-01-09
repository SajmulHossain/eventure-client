import { Suspense } from "react";
import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import getMyEvents from "@/services/events/getMyEvents";
import { getSaveEvent } from "@/services/savedEvents/getSaveStatus";
import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

const MyEventsContent = async () => {
  const events = await getMyEvents();

  if (!events?.length) {
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
        <EventCard key={event?._id} event={event} isSaved={isSaved} />
      ))}
    </div>
  );
};

const MyEventsPage = () => {
  return (
    <section className="page">
      <Suspense fallback={<EventCardSkeletonGrid count={4} />}>
        <MyEventsContent />
      </Suspense>
    </section>
  );
};

export default MyEventsPage;

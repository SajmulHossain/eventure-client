import { Suspense } from "react";
import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import getSavedEvents from "@/services/savedEvents/getSavedEvents";
import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

const SavedEventsContent = async () => {
  const events = await getSavedEvents();

  if (!events?.length) {
    return <NoDataFound />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event?._id} event={event} />
      ))}
    </div>
  );
};

const SavedEventsPage = () => {
  return (
    <section className="page">
      <Suspense fallback={<EventCardSkeletonGrid count={6} />}>
        <SavedEventsContent />
      </Suspense>
    </section>
  );
};

export default SavedEventsPage;

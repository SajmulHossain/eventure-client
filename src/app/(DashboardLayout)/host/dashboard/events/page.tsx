import { Suspense } from "react";
import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import hostedEvents from "@/services/events/hostedEvents";
import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

const HostedEventsContent = async () => {
  const events = await hostedEvents();

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

const HostedEvents = () => {
  return (
    <section className="section">
      <Suspense fallback={<EventCardSkeletonGrid count={6} />}>
        <HostedEventsContent />
      </Suspense>
    </section>
  );
};

export default HostedEvents;

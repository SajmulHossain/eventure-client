import { Suspense } from "react";
import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import hostedEvents from "@/services/events/hostedEvents";
import { EventCardSkeletonGrid } from "@/components/shared/skeletons";
import { EventsTable } from "@/components/shared/EventsTable";
import HostedEventsClient from "./HostedEventsClient";

const HostedEventsContent = async () => {
  const events = await hostedEvents();

  if (!events?.length) {
    return <NoDataFound />;
  }

  return (
      <div>
          <HostedEventsClient events={events} />
    </div>
  );
};

const AdminHostedEvents = () => {
  return (
    <section className="section">
      <Suspense fallback={<EventCardSkeletonGrid count={6} />}>
        <HostedEventsContent />
      </Suspense>
    </section>
  );
};

export default AdminHostedEvents;

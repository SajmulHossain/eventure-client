import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import hostedEvents from "@/services/events/hostedEvents";
import React from "react";

async function HostedEvents() {
  const events = await hostedEvents();
  return (
    <section className="section">
      {events?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event?._id} event={event} />
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </section>
  );
}

export default HostedEvents;

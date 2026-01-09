import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import getMyEvents from "@/services/events/getMyEvents";
import { getSaveEvent } from "@/services/savedEvents/getSaveStatus";

async function MyEventsPage() {
  const events = await getMyEvents();
  console.log(events);
  return (
    <section className="page">
      {events?.length ? (
        <div>
          {events.map(async (event) => {
            const isSaved = await getSaveEvent(event?._id as string);
            return <EventCard key={event?._id} event={event} />;
          })}
        </div>
      ) : (
        <NoDataFound />
      )}
    </section>
  );
}

export default MyEventsPage;

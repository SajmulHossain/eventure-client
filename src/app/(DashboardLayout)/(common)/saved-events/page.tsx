import { EventCard } from "@/components/module/Event/EventCard";
import NoDataFound from "@/components/shared/NoDataFound";
import getSavedEvents from "@/services/savedEvents/getSavedEvents";

async function SavedEventsPage() {
  const events = await getSavedEvents();

  return (
    <section className="page">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events?.length ? (
          events.map((event) => <EventCard key={event?._id} event={event} />)
        ) : (
          <NoDataFound />
        )}
      </div>
    </section>
  );
}

export default SavedEventsPage;

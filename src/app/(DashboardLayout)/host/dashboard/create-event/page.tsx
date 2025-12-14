import { EventForm } from "@/components/module/Event/event-form";
import { getMe } from "@/services/auth/getMe";
import { getAllEventTypes } from "@/services/events/getAllEventTypes";


const CreateEventPage = async () => {
  const user = await getMe();
  const eventTypes = await getAllEventTypes();
  return (
    <section className="page">
      <EventForm user={user} types={eventTypes} />
    </section>
  );
};

export default CreateEventPage;

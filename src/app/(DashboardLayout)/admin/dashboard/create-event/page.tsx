import { EventForm } from "@/components/module/Event/event-form";
import { getMe } from "@/services/auth/getMe";
import { getAllEventTypes } from "@/services/events/getAllEventTypes";

async function CreateEventPage() {
  const user = await getMe();
  const types = await getAllEventTypes();
  return (
    <section className="page">
      <div>
        <EventForm user={user} types={types} />
      </div>
    </section>
  );
}

export default CreateEventPage;

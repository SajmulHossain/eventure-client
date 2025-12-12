import { EventForm } from "@/components/module/Event/event-form";
import { getMe } from "@/services/auth/getMe";


const CreateEventPage = async () => {
  const user = await getMe();
  return (
    <section className="page">
      <EventForm user={user} />
    </section>
  );
};

export default CreateEventPage;

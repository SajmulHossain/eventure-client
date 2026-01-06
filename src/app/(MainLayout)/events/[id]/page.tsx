import { getEvent } from "@/services/events/get-event";
import { IEvent } from "@/types";
import Link from "next/link";
import Reviews from "@/components/module/Event/Reviews";
import { handleJoinEvent } from "@/services/events/handleJoinEvent";
import NoDataFound from "@/components/shared/NoDataFound";
import { format } from "date-fns";

interface Props {
  params: Promise<{ id: string }>;
}

const EventDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const event: IEvent | null = await getEvent(id);

  if (!event) {
    return <NoDataFound />;
  }

  return (
    <div className="page">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <img src={event.image_url || "/favicon.ico"} alt={event.name} className="rounded-md w-full h-64 object-cover" />
          <h1 className="text-2xl font-semibold">{event.name}</h1>
          <p className="text-sm text-muted-foreground">{event.description}</p>

          <div className="mt-4 flex gap-3">
            <button className="btn" onClick={async () => await handleJoinEvent(id)}>
              Join Event
            </button>
            {event.joinning_fee && event.joinning_fee > 0 && (
              <Link href={`/events/${event._id}/checkout`} className="btn btn-primary">
                Pay {event.joinning_fee}
              </Link>
            )}
          </div>

          <Reviews eventId={id} />
        </div>

        <aside className="space-y-3">
          <div className="border rounded p-3">
            <h3 className="font-medium">When</h3>
            <div className="text-sm">{event.date_and_time ? format(new Date(event?.date_and_time || new Date()), "dd MMM yyyy") : "—"}</div>
          </div>

          <div className="border rounded p-3">
            <h3 className="font-medium">Where</h3>
            <div className="text-sm">{event.location || "—"}</div>
          </div>

          <div className="border rounded p-3">
            <h3 className="font-medium">Host</h3>
            <div className="text-sm">{event.host_id?.name || "—"}</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EventDetailPage;

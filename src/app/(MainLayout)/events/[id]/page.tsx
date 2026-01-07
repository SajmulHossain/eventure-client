import { getEvent } from "@/services/events/get-event";
import { IEvent } from "@/types";
import Link from "next/link";
import Reviews from "@/components/module/Event/Reviews";
import NoDataFound from "@/components/shared/NoDataFound";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Info, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { getNameLetters } from "@/lib/getNameLetters";

interface Props {
  params: Promise<{ id: string }>;
}

const EventDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const event: IEvent | null = await getEvent(id);

  const defaultImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800";

  console.log(event);

  if (!event) {
    return <NoDataFound />;
  }

  return (
    <div className="page">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative h-[400px] w-full overflow-hidden rounded-3xl mb-8">
          <Image
            src={event?.image_url || defaultImage}
            alt={event?.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <Badge className="mb-4 bg-indigo-500 hover:bg-indigo-600">
              {event?.type?.name}
            </Badge>
            <h1 className="text-4xl font-extrabold mb-2">{event?.name}</h1>
            <div className="flex items-center gap-4 text-sm font-light">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {event?.location}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Information */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About this Event</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {event?.description}
              </p>
            </section>

            <Separator />

            <section className="grid grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <Calendar className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Date</p>
                  <p className="font-semibold text-slate-900">Oct 24, 2024</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <Clock className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Time</p>
                  <p className="font-semibold text-slate-900">06:00 PM</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-4 text-slate-900">
                Hosted by
              </h3>
              <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarImage
                      src={event?.host_id?.profile_photo}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {getNameLetters(event?.host_id?.name || "")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-slate-900">
                      {event?.host_id?.name}
                    </p>
                    <p className="text-xs text-slate-500">Verified Host</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 p-6 rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Entry Fee
                  </p>
                  <h3 className="text-3xl font-black text-indigo-600">
                    ৳{event?.joinning_fee}
                  </h3>
                </div>
                <Badge variant="outline" className="h-fit">
                  Per Person
                </Badge>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Availability</span>
                  <span className="font-bold text-slate-900">
                    {event?.required_participants -
                      (event?.joinedParticipants || 0)}{" "}
                    seats left
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{
                      width: `${
                        ((event?.joinedParticipants || 0) /
                          event?.required_participants) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <Button className="w-full h-12 text-lg font-bold rounded-xl bg-slate-900 hover:bg-indigo-600 transition-all">
                Join Event Now
              </Button>

              <p className="text-[10px] text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                <Info className="h-3 w-3" /> No refunds 24h prior to event
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;

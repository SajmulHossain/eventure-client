import { getEvent } from "@/services/events/get-event";
import { IEvent } from "@/types";
import NoDataFound from "@/components/shared/NoDataFound";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Info, MapPin, Heart, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { getNameLetters } from "@/lib/getNameLetters";
import { format } from "date-fns";
import EventDetailsActionButton from "@/components/module/Event/EventDetailsActionButton";
import { getSaveEvent } from "@/services/savedEvents/getSaveStatus";

const EventDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const event: IEvent | null = await getEvent(id);
  const isSaved = await getSaveEvent(id);
  console.log(isSaved)

  if (!event) return <NoDataFound />;

  const defaultImage = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800";
  
  const eventDate = new Date(event.date_and_time);
  const joinedCount = event?.joinedParticipants?.length || 0;
  const progress = (joinedCount / event.required_participants) * 100;

  return (
    <section className="page">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative h-[450px] w-full overflow-hidden rounded-4xl mb-10 shadow-2xl">
          <Image
            src={event?.image_url || defaultImage}
            alt={event?.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <Badge className="mb-4 bg-indigo-500 hover:bg-indigo-600 border-none px-4 py-1">
              {event?.type?.name}
            </Badge>
            <h1 className="text-5xl font-black mb-4 tracking-tight leading-tight">{event?.name}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-200">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                <MapPin className="h-4 w-4 text-indigo-400" /> {event?.location}
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                <Calendar className="h-4 w-4 text-indigo-400" /> {format(eventDate, "MMMM dd, yyyy")}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">About this Event</h2>
              <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                {event?.description}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600"><Calendar /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Date</p>
                  <p className="font-semibold text-slate-900">{format(eventDate, "EEE, MMM dd, yyyy")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><Clock /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Time</p>
                  <p className="font-semibold text-slate-900">{format(eventDate, "hh:mm a")}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-slate-100" />

            <section>
              <h3 className="font-bold text-lg mb-4 text-slate-900">Hosted by</h3>
              <div className="flex items-center justify-between p-6 rounded-2xl border border-indigo-50 bg-indigo-50/30">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 border-4 border-white shadow-md">
                    <AvatarImage src={event?.host_id?.profile_photo} className="object-cover" />
                    <AvatarFallback className="bg-indigo-100 text-indigo-700">
                      {getNameLetters(event?.host_id?.name || "H")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg text-slate-900">{event?.host_id?.name}</p>
                    <p className="text-sm text-indigo-600 font-medium">Top Rated Host</p>
                  </div>
                </div>
                <Button variant="outline" className="shadow-sm border-slate-200">View Profile</Button>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 p-8 rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-tighter mb-1">Entry Fee</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">৳{event?.joinning_fee}</span>
                    <span className="text-slate-400 font-medium text-sm">/ person</span>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-none px-3">
                  Open
                </Badge>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 font-medium">Availability</span>
                  <span className="font-bold text-indigo-600">
                    {event?.required_participants - joinedCount} seats remaining
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              </div>

              {/* Action Buttons Row */}
              <EventDetailsActionButton id={event?._id || ""} isSaved={isSaved} />

              <div className="mt-6 p-4 rounded-xl bg-slate-50 flex gap-3 items-start">
                <Info className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  By joining, you agree to the community guidelines. No refunds are available 24 hours prior to the event start time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
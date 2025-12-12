import NoDataFound from "@/components/shared/NoDataFound";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getEvents } from "@/services/events/events";
import { ArrowUpRight, Clock, Heart, MapPin } from "lucide-react";
import Image from "next/image";

const EventCard = async () => {
  const events = await getEvents();
  console.log(events);
  return (
    <section className="page">
      {events.length ? (
        <div className="flex items-center justify-center p-8 bg-slate-50 min-h-[500px]">
          <Card className="group relative w-full max-w-[380px] overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
                alt="Event Cover"
                fill
                className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-white/20 text-white backdrop-blur-md border-white/20 hover:bg-white/30">
                  Music
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-emerald-500/90 text-white border-none backdrop-blur-md"
                >
                  Live
                </Badge>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-red-400 transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Save event</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-100">
                    Sat, Oct 24 • 8:00 PM
                  </span>
                </div>
              </div>
            </div>

            <CardContent className="p-5">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Neon Nights: Rooftop Jazz & Cocktails
                </h3>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-lg font-bold text-indigo-600">$45</span>
                  <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                    per person
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Skyline Lounge
                  </p>
                  <p className="text-xs text-slate-500">
                    123 Market St, San Francisco
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <Avatar className="h-8 w-8 border-2 border-white ring-1 ring-slate-100">
                      <AvatarImage src="https://i.pravatar.cc/100?img=33" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 border-2 border-white ring-1 ring-slate-100">
                      <AvatarImage src="https://i.pravatar.cc/100?img=47" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 ring-1 ring-slate-100 text-[10px] font-bold text-slate-600">
                      +24
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Going
                  </span>
                </div>

                <Button className="rounded-full bg-slate-900 px-6 hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40">
                  Book
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <NoDataFound />
      )}
    </section>
  );
};

export default EventCard;

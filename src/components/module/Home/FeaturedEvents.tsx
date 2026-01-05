import { Button } from "@/components/ui/button";
import { getFeaturedEvents } from "@/services/events/getFeaturedEvents";
import { ArrowRight } from "lucide-react";
import { EventCard } from "../Event/EventCard";
import Link from "next/link";

const FeaturedEvents = async () => {
  const events = await getFeaturedEvents();
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Events
            </h2>
            <p className="mt-2 text-slate-500">
              Curated activities happening near you this week.
            </p>
          </div>
          <Button
            variant="ghost"
            className="hidden md:flex text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
          >
            View all events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300"
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full" asChild>
             <Link href="/events">View all events <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
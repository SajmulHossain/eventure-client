import Image from "next/image";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Sunrise Yoga by the Bay",
    date: "Sat, Oct 24 • 6:00 AM",
    location: "Marina Green, SF",
    category: "Wellness",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Tech Startup Mixer",
    date: "Fri, Oct 23 • 7:00 PM",
    location: "SOMA, SF",
    category: "Networking",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Urban Photography Walk",
    date: "Sun, Oct 25 • 2:00 PM",
    location: "Chinatown, SF",
    category: "Art",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
  },
];

const FeaturedEvents = () => {
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
            <Card
              key={event.id}
              className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-slate-900 hover:bg-white">
                  {event.category}
                </Badge>
              </div>
              <CardHeader className="p-5 pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-slate-900 line-clamp-1">
                    {event.title}
                  </h3>
                  <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded text-sm">
                    {event.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-2 space-y-2">
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center text-slate-500 text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full bg-slate-900 hover:bg-indigo-600 transition-colors">
                  Join Event
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View all events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
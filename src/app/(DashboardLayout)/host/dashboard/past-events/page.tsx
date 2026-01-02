import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Ticket, Star } from "lucide-react";

const JoinedEventsPastPage = () => {
  const dummyPastEvents = [
    {
      id: 1,
      title: "Business Networking Event",
      host: "Business Seminars Inc.",
      date: "2024-04-10",
      time: "6:00 PM",
      location: "Chicago Business Hub",
      attendees: 120,
      ticketType: "Standard",
      rating: 5,
    },
    {
      id: 2,
      title: "Sports Championship",
      host: "Sports Events",
      date: "2024-03-25",
      time: "3:00 PM",
      location: "Boston Stadium",
      attendees: 1000,
      ticketType: "VIP",
      rating: 4,
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      host: "Tech Events Co.",
      date: "2024-03-15",
      time: "9:00 AM",
      location: "Online",
      attendees: 150,
      ticketType: "Premium",
      rating: 5,
    },
    {
      id: 4,
      title: "Photography Workshop",
      host: "Creative Workshops",
      date: "2024-02-28",
      time: "1:00 PM",
      location: "Los Angeles Arts Center",
      attendees: 30,
      ticketType: "Standard",
      rating: 4,
    },
  ];

  return (
    <section className="page">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Joined Events (Past)
        </h1>
        <p className="text-muted-foreground mt-1">
          View your past event participation history
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyPastEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl flex-1">{event.title}</CardTitle>
                <Badge variant="secondary">Completed</Badge>
              </div>
              <CardDescription className="mt-2">{event.host}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ticket className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">{event.ticketType}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1 pt-2 border-t">
                  <span className="text-sm text-muted-foreground">Your Rating:</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < event.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default JoinedEventsPastPage;


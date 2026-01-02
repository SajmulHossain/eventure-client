import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const AllEventsPage = () => {
  const dummyEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      host: "Tech Events Co.",
      date: "2024-06-15",
      time: "10:00 AM",
      location: "New York Convention Center",
      attendees: 250,
      status: "Upcoming",
      category: "Technology",
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      host: "Creative Workshops",
      date: "2024-05-20",
      time: "2:00 PM",
      location: "Los Angeles Arts Center",
      attendees: 45,
      status: "Upcoming",
      category: "Education",
    },
    {
      id: 3,
      title: "Business Networking Event",
      host: "Business Seminars Inc.",
      date: "2024-04-10",
      time: "6:00 PM",
      location: "Chicago Business Hub",
      attendees: 120,
      status: "Completed",
      category: "Business",
    },
    {
      id: 4,
      title: "Summer Music Festival",
      host: "Music Festivals",
      date: "2024-07-05",
      time: "12:00 PM",
      location: "Austin Park",
      attendees: 500,
      status: "Upcoming",
      category: "Music",
    },
    {
      id: 5,
      title: "Sports Championship",
      host: "Sports Events",
      date: "2024-03-25",
      time: "3:00 PM",
      location: "Boston Stadium",
      attendees: 1000,
      status: "Completed",
      category: "Sports",
    },
    {
      id: 6,
      title: "Digital Marketing Masterclass",
      host: "Tech Events Co.",
      date: "2024-05-30",
      time: "9:00 AM",
      location: "Online",
      attendees: 180,
      status: "Upcoming",
      category: "Marketing",
    },
  ];

  return (
    <section className="page">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">All Events</h1>
        <p className="text-muted-foreground mt-1">
          View and manage all events in the system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl flex-1">{event.title}</CardTitle>
                <Badge
                  variant={
                    event.status === "Upcoming" ? "default" : "secondary"
                  }
                >
                  {event.status}
                </Badge>
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
                  <Badge variant="outline">{event.category}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AllEventsPage;


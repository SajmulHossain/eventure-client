import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Heart, Trash2 } from "lucide-react";

const SavedEventsPage = () => {
  const dummySavedEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      host: "Tech Events Co.",
      date: "2024-06-15",
      time: "10:00 AM",
      location: "New York Convention Center",
      attendees: 250,
      category: "Technology",
      price: 299.99,
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      host: "Creative Workshops",
      date: "2024-05-20",
      time: "2:00 PM",
      location: "Los Angeles Arts Center",
      attendees: 45,
      category: "Education",
      price: 79.99,
    },
    {
      id: 3,
      title: "Summer Music Festival",
      host: "Music Festivals",
      date: "2024-07-05",
      time: "12:00 PM",
      location: "Austin Park",
      attendees: 500,
      category: "Music",
      price: 149.99,
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      host: "Tech Events Co.",
      date: "2024-05-30",
      time: "9:00 AM",
      location: "Online",
      attendees: 180,
      category: "Marketing",
      price: 199.99,
    },
    {
      id: 5,
      title: "Photography Workshop",
      host: "Creative Workshops",
      date: "2024-06-10",
      time: "1:00 PM",
      location: "Los Angeles Arts Center",
      attendees: 30,
      category: "Education",
      price: 89.99,
    },
  ];

  return (
    <section className="page">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Saved Events</h1>
        <p className="text-muted-foreground mt-1">
          Events you've saved for later
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummySavedEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl flex-1">{event.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
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
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-lg font-bold">${event.price}</span>
                  <Button size="sm">Join Event</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SavedEventsPage;


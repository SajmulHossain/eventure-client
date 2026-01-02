import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Calendar, CheckCircle, Clock } from "lucide-react";

const ParticipantsPage = () => {
  const dummyParticipants = [
    {
      id: 1,
      name: "James Miller",
      email: "james.miller@example.com",
      event: "Tech Innovation Summit 2024",
      registeredDate: "2024-04-15",
      status: "Confirmed",
      ticketType: "VIP",
      avatar: "JM",
    },
    {
      id: 2,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      event: "Tech Innovation Summit 2024",
      registeredDate: "2024-04-16",
      status: "Confirmed",
      ticketType: "Standard",
      avatar: "EW",
    },
    {
      id: 3,
      name: "Oliver Brown",
      email: "oliver.brown@example.com",
      event: "Creative Writing Workshop",
      registeredDate: "2024-04-10",
      status: "Pending",
      ticketType: "Standard",
      avatar: "OB",
    },
    {
      id: 4,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      event: "Tech Innovation Summit 2024",
      registeredDate: "2024-04-18",
      status: "Confirmed",
      ticketType: "Premium",
      avatar: "SM",
    },
    {
      id: 5,
      name: "Noah Garcia",
      email: "noah.garcia@example.com",
      event: "Creative Writing Workshop",
      registeredDate: "2024-04-12",
      status: "Confirmed",
      ticketType: "Standard",
      avatar: "NG",
    },
    {
      id: 6,
      name: "Ava Rodriguez",
      email: "ava.rodriguez@example.com",
      event: "Tech Innovation Summit 2024",
      registeredDate: "2024-04-20",
      status: "Pending",
      ticketType: "VIP",
      avatar: "AR",
    },
  ];

  return (
    <section className="page">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Participants</h1>
        <p className="text-muted-foreground mt-1">
          Manage participants for your events
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyParticipants.map((participant) => (
          <Card key={participant.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${participant.name}`} />
                    <AvatarFallback>{participant.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{participant.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Mail className="h-3 w-3" />
                      {participant.email}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Event:</p>
                  <p className="text-sm text-muted-foreground">{participant.event}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge
                    variant={
                      participant.status === "Confirmed"
                        ? "default"
                        : "secondary"
                    }
                    className="flex items-center gap-1"
                  >
                    {participant.status === "Confirmed" ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                    {participant.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Ticket:</span>
                  <Badge variant="outline">{participant.ticketType}</Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t">
                  <Calendar className="h-3 w-3" />
                  Registered: {participant.registeredDate}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ParticipantsPage;


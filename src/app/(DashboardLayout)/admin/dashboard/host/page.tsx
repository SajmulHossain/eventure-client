import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Mail, Calendar, MapPin, Star } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";

const HostManagementPage = () => {
  const dummyHosts = [
    {
      id: 1,
      name: "Alex Thompson",
      email: "alex.thompson@example.com",
      organization: "Tech Events Co.",
      location: "New York, USA",
      status: "Active",
      rating: 4.8,
      totalEvents: 24,
      createdAt: "2024-01-10",
      avatar: "AT",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      organization: "Creative Workshops",
      location: "Los Angeles, USA",
      status: "Active",
      rating: 4.9,
      totalEvents: 18,
      createdAt: "2024-02-15",
      avatar: "MG",
    },
    {
      id: 3,
      name: "David Wilson",
      email: "david.wilson@example.com",
      organization: "Business Seminars Inc.",
      location: "Chicago, USA",
      status: "Pending",
      rating: 4.5,
      totalEvents: 12,
      createdAt: "2024-03-20",
      avatar: "DW",
    },
    {
      id: 4,
      name: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      organization: "Music Festivals",
      location: "Austin, USA",
      status: "Active",
      rating: 4.7,
      totalEvents: 31,
      createdAt: "2023-12-05",
      avatar: "LA",
    },
    {
      id: 5,
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      organization: "Sports Events",
      location: "Boston, USA",
      status: "Inactive",
      rating: 4.3,
      totalEvents: 8,
      createdAt: "2024-01-25",
      avatar: "RT",
    },
  ];

  return (
    <section className="page">
      <PageHeader
        title="Host Management"
        description="Manage all event hosts in the system"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyHosts.map((host) => (
          <Card key={host.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${host.name}`} />
                    <AvatarFallback>{host.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{host.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Mail className="h-3 w-3" />
                      {host.email}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{host.organization}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {host.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{host.rating}</span>
                  </div>
                  <Badge
                    variant={host.status === "Active" ? "default" : host.status === "Pending" ? "secondary" : "outline"}
                  >
                    {host.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Events:</span>
                  <span className="font-medium">{host.totalEvents}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  Joined: {host.createdAt}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HostManagementPage;


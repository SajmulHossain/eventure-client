import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Calendar, CalendarCheck } from "lucide-react";

const UsersManagementPage = () => {
  const dummyUsers = [
    {
      id: 1,
      name: "James Miller",
      email: "james.miller@example.com",
      status: "Active",
      joinedEvents: 5,
      createdAt: "2024-01-20",
      avatar: "JM",
    },
    {
      id: 2,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      status: "Active",
      joinedEvents: 12,
      createdAt: "2024-02-10",
      avatar: "EW",
    },
    {
      id: 3,
      name: "Oliver Brown",
      email: "oliver.brown@example.com",
      status: "Active",
      joinedEvents: 8,
      createdAt: "2024-02-28",
      avatar: "OB",
    },
    {
      id: 4,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      status: "Active",
      joinedEvents: 15,
      createdAt: "2024-01-15",
      avatar: "SM",
    },
    {
      id: 5,
      name: "Noah Garcia",
      email: "noah.garcia@example.com",
      status: "Inactive",
      joinedEvents: 3,
      createdAt: "2024-03-05",
      avatar: "NG",
    },
    {
      id: 6,
      name: "Ava Rodriguez",
      email: "ava.rodriguez@example.com",
      status: "Active",
      joinedEvents: 20,
      createdAt: "2023-12-20",
      avatar: "AR",
    },
  ];

  return (
    <section className="page">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
        <p className="text-muted-foreground mt-1">
          Manage all registered users in the system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyUsers.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                    <AvatarFallback>{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Mail className="h-3 w-3" />
                      {user.email}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge
                    variant={user.status === "Active" ? "default" : "outline"}
                  >
                    {user.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarCheck className="h-4 w-4" />
                    Joined Events:
                  </div>
                  <span className="text-sm font-medium">{user.joinedEvents}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  Registered: {user.createdAt}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UsersManagementPage;


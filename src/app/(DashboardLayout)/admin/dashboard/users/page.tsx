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
import { PageHeader } from "@/components/shared/PageHeader";
import { getAllUsers } from "@/services/user/getAllUsers";
import { UsersPageClient } from "./UsersPageClient";

const UsersManagementPage = async () => {
 const users = await getAllUsers();

  return (
    <section className="page">
      <PageHeader
              title="Host Management"
              description="Manage all event hosts in the system"
              rightContent={
                <Badge variant="outline" className="text-sm">
                  Total: {users.length} users
                </Badge>
              }
            />
      
            <UsersPageClient users={users} />
    </section>
  );
};

export default UsersManagementPage;


"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser, UserRole } from "@/types";
import { format } from "date-fns";
import {
  Building2,
  Calendar,
  Edit,
  Mail,
  MapPin,
  MoreVertical,
  Shield,
  Trash2,
  User,
} from "lucide-react";
import Link from "next/link";

interface UsersTableProps {
  users: IUser[];
  role?: UserRole;
  onEdit?: (userId: string) => void;
  onDelete?: (userId: string) => void;
}

export const UsersTable = ({
  users,
  role,
  onEdit,
  onDelete,
}: UsersTableProps) => {

  if (users.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>No {role?.toLowerCase() || "users"} found</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            {role === "HOST" && <TableHead>Organization</TableHead>}
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            const joinedDate = user.createdAt
              ? new Date(user.createdAt)
              : null;

            return (
              <TableRow key={user._id} className="hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={user.profile_photo}
                        alt={user.name}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium line-clamp-1">{user.name}</p>
                      {user.bio && (
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {user.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="line-clamp-1">{user.email}</span>
                  </div>
                </TableCell>

                <TableCell>
                  {user.location ? (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span className="line-clamp-1">{user.location}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-muted-foreground">—</span>
                  )}
                </TableCell>

                {role === "HOST" && (
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span className="line-clamp-1">
                        {user.bio || "No organization"}
                      </span>
                    </div>
                  </TableCell>
                )}

                <TableCell>
                  <Badge
                    variant={
                      user.role === "ADMIN"
                        ? "default"
                        : user.role === "HOST"
                          ? "secondary"
                          : "outline"
                    }
                    className="flex items-center gap-1 w-fit"
                  >
                    {user.role === "ADMIN" && (
                      <Shield className="h-3 w-3" />
                    )}
                    {user.role === "HOST" && <Building2 className="h-3 w-3" />}
                    {user.role === "USER" && <User className="h-3 w-3" />}
                    {user.role}
                  </Badge>
                </TableCell>

                <TableCell>
                  {joinedDate ? (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span>{format(joinedDate, "dd MMM, yyyy")}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-muted-foreground">—</span>
                  )}
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {onEdit && (
                        <DropdownMenuItem
                          onClick={() => onEdit(user._id || "")}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit User
                        </DropdownMenuItem>
                      )}
                      {onDelete && (
                        <DropdownMenuItem
                          onClick={() => onDelete(user._id || "")}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete User
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem>
                        <Link href={`/profile/${user._id}`}>View Profile</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};


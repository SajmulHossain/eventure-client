
import { UsersTable } from "@/components/shared/UsersTable";
import { IUser } from "@/types";

interface UsersPageClientProps {
  users: IUser[];
}

export const UsersPageClient = ({ users }: UsersPageClientProps) => {
  return (
    <UsersTable
      users={users}
      role="USER"
    />
  );
};


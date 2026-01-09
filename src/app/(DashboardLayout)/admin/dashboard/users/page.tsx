import { Suspense } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/badge";
import { getAllUsers } from "@/services/user/getAllUsers";
import { UsersPageClient } from "./UsersPageClient";
import { TableSkeleton } from "@/components/shared/skeletons";

const UsersContent = async () => {
  const users = await getAllUsers();

  return (
    <>
      <PageHeader
        title="Users Management"
        description="Manage all registered users in the system"
        rightContent={
          <Badge variant="outline" className="text-sm">
            Total: {users.length} users
          </Badge>
        }
      />
      <UsersPageClient users={users} />
    </>
  );
};

const UsersManagementPage = () => {
  return (
    <section className="page">
      <Suspense fallback={<TableSkeleton rows={8} cols={7} />}>
        <UsersContent />
      </Suspense>
    </section>
  );
};

export default UsersManagementPage;


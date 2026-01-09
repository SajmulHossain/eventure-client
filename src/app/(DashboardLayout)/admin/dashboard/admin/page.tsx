import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAllAdmins } from "@/services/user/getAllAdmins";
import { AdminsPageClient } from "./AdminsPageClient";
import { TableSkeleton } from "@/components/shared/skeletons";

const AdminsContent = async () => {
  const admins = await getAllAdmins();

  return (
    <>
      <PageHeader
        title="Admin Management"
        description="Manage all administrators in the system"
        rightContent={
          <Badge variant="outline" className="text-sm">
            Total: {admins.length} admins
          </Badge>
        }
      />
      <AdminsPageClient admins={admins} />
    </>
  );
};

const AdminManagementPage = () => {
  return (
    <section className="page">
      <Suspense fallback={<TableSkeleton rows={8} cols={7} />}>
        <AdminsContent />
      </Suspense>
    </section>
  );
};

export default AdminManagementPage;


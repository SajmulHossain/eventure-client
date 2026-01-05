import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAllAdmins } from "@/services/user/getAllAdmins";
import { AdminsPageClient } from "./AdminsPageClient";

const AdminManagementPage = async () => {
  const admins = await getAllAdmins();

  return (
    <section className="page">
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
    </section>
  );
};

export default AdminManagementPage;


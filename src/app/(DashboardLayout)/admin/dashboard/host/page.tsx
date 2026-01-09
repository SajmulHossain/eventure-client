import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAllHosts } from "@/services/user/getAllHosts";
import { HostsPageClient } from "./HostsPageClient";
import { TableSkeleton } from "@/components/shared/skeletons";

const HostsContent = async () => {
  const hosts = await getAllHosts();

  return (
    <>
      <PageHeader
        title="Host Management"
        description="Manage all event hosts in the system"
        rightContent={
          <Badge variant="outline" className="text-sm">
            Total: {hosts.length} hosts
          </Badge>
        }
      />
      <HostsPageClient hosts={hosts} />
    </>
  );
};

const HostManagementPage = () => {
  return (
    <section className="page">
      <Suspense fallback={<TableSkeleton rows={8} cols={8} />}>
        <HostsContent />
      </Suspense>
    </section>
  );
};

export default HostManagementPage;


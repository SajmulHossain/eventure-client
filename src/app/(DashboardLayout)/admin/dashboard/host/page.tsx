import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAllHosts } from "@/services/user/getAllHosts";
import { HostsPageClient } from "./HostsPageClient";

const HostManagementPage = async () => {
  const hosts = await getAllHosts();

  return (
    <section className="page">
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
    </section>
  );
};

export default HostManagementPage;


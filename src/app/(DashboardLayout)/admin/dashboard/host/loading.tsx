import { PageHeaderSkeleton, TableSkeleton } from "@/components/shared/skeletons";

export default function HostsLoading() {
  return (
    <section className="page">
      <PageHeaderSkeleton />
      <TableSkeleton rows={8} cols={8} />
    </section>
  );
}


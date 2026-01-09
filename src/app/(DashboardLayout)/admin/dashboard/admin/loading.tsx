import { PageHeaderSkeleton, TableSkeleton } from "@/components/shared/skeletons";

export default function AdminsLoading() {
  return (
    <section className="page">
      <PageHeaderSkeleton />
      <TableSkeleton rows={8} cols={7} />
    </section>
  );
}


import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

export default function MyEventsLoading() {
  return (
    <section className="page">
      <div className="mb-6 animate-pulse">
        <div className="h-8 bg-slate-200 rounded w-48 mb-2" />
        <div className="h-4 bg-slate-200 rounded w-64" />
      </div>
      <EventCardSkeletonGrid count={4} />
    </section>
  );
}


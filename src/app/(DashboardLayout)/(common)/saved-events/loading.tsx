import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

export default function SavedEventsLoading() {
  return (
    <section className="page">
      <EventCardSkeletonGrid count={6} />
    </section>
  );
}


import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

export default function HostedEventsLoading() {
  return (
    <section className="section">
      <EventCardSkeletonGrid count={6} />
    </section>
  );
}


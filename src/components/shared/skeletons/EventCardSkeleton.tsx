import { Card } from "@/components/ui/card";

export const EventCardSkeleton = () => {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm animate-pulse">
      <div className="relative aspect-video overflow-hidden bg-slate-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-200 rounded w-24" />
        <div className="h-5 bg-slate-200 rounded w-3/4" />
        <div className="h-3 bg-slate-200 rounded w-1/2" />
      </div>
    </Card>
  );
};

export const EventCardSkeletonGrid = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
};


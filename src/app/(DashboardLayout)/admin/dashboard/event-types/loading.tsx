import { PageHeaderSkeleton } from "@/components/shared/skeletons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function EventTypesLoading() {
  return (
    <section className="page">
      <PageHeaderSkeleton />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-slate-200 rounded w-32" />
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-slate-200 rounded w-full mb-2" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


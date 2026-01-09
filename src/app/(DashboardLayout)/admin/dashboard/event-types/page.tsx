import { Suspense } from "react";
import NoDataFound from "@/components/shared/NoDataFound";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getEventTypes } from "@/services/events/get-event-types";
import { Plus, Tag } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card as SkeletonCard, CardContent as SkeletonCardContent, CardHeader as SkeletonCardHeader } from "@/components/ui/card";

const EventTypesSkeleton = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <SkeletonCard key={i} className="animate-pulse">
        <SkeletonCardHeader>
          <div className="h-6 bg-slate-200 rounded w-32" />
        </SkeletonCardHeader>
        <SkeletonCardContent>
          <div className="h-4 bg-slate-200 rounded w-full mb-2" />
          <div className="h-4 bg-slate-200 rounded w-2/3" />
        </SkeletonCardContent>
      </SkeletonCard>
    ))}
  </div>
);

const EventTypesContent = async () => {
  const eventTypes = await getEventTypes();

  return (
    <>
      <PageHeader
        title="Event Types"
        description="Manage all event types in the system"
        rightContent={
          <Link href="/admin/dashboard/create-event-type">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Event Type
            </Button>
          </Link>
        }
      />

      {eventTypes.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((eventType) => (
            <Card
              key={eventType._id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Tag className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{eventType.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {eventType.description}
                </CardDescription>
                {eventType.createdAt && (
                  <p className="text-xs text-muted-foreground mt-4">
                    Created:{" "}
                    {format(
                      new Date(eventType.createdAt || new Date()),
                      "dd MMM, yyyy"
                    )}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

const AllEventTypesPage = () => {
  return (
    <section className="page">
      <Suspense fallback={<EventTypesSkeleton />}>
        <EventTypesContent />
      </Suspense>
    </section>
  );
};

export default AllEventTypesPage;

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

const AllEventTypesPage = async () => {
  const eventTypes = await getEventTypes();

  return (
    <section className="page">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Event Types</h1>
          <p className="text-muted-foreground mt-1">
            Manage all event types in the system
          </p>
        </div>
        <Link href="/admin/dashboard/create-event-type">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Event Type
          </Button>
        </Link>
      </div>

      {eventTypes.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((eventType) => (
            <Card key={eventType._id} className="hover:shadow-md transition-shadow">
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
                    {new Date(eventType.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </section>
  );
};

export default AllEventTypesPage;


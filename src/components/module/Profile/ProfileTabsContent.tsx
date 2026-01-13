"use client";

import { EventCard } from "@/components/module/Event/EventCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";
import { IEvent, UserRole } from "@/types";
import { format } from "date-fns";
import { Calendar, Heart, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NoDataFound from "@/components/shared/NoDataFound";
import { IReview } from "@/services/user/getUserReviews";

interface ProfileTabsContentProps {
  role: UserRole;
  hostedEvents: IEvent[];
  joinedEvents: IEvent[];
  reviews: IReview[];
  bio?: string;
  userId?: string;
  isOwner: boolean;
}

export const ProfileTabsContent = ({
  role,
  hostedEvents,
  joinedEvents,
  reviews,
  bio,
  userId,
  isOwner,
}: ProfileTabsContentProps) => {
  const calculateAverageRating = () => {
    if (!reviews || reviews?.length === 0) return { average: 0, count: 0 };
    const sum = reviews?.reduce((acc, review) => acc + review.rating, 0);
    return { average: sum / reviews?.length, count: reviews?.length };
  };

  const ratingData = calculateAverageRating();

  return (
    <>
      {role === "HOST" && (
        <TabsContent value="hosted" className="mt-6 space-y-6">
          {hostedEvents?.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {hostedEvents.map((event) => (
                <Card
                  key={event._id}
                  className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image_url || "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"}
                      alt={event.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white">
                      {format(new Date(event.date_and_time), "EEE, MMM dd")}
                    </Badge>
                    <Badge
                      variant={
                        event.status === "OPEN"
                          ? "default"
                          : event.status === "FULL"
                          ? "secondary"
                          : event.status === "CANCELLED"
                          ? "destructive"
                          : "outline"
                      }
                      className="absolute top-4 right-4"
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-600 bg-indigo-50"
                      >
                        {event.type?.name || "Event"}
                      </Badge>
                      <span className="text-sm font-semibold text-slate-900">
                        ৳{event.joinning_fee}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {event.name}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Users className="w-4 h-4" />
                        <span>
                          {Array.isArray(event.joinedParticipants)
                            ? event.joinedParticipants?.length
                            : event.joinedParticipants || 0}{" "}
                          / {event.required_participants}
                        </span>
                      </div>
                      {isOwner && (
                        <Link href={`/host/dashboard/events/${event._id}/edit`}>
                          <Button size="sm" variant="secondary">
                            Manage
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
        </TabsContent>
      )}

      {role === "USER" && (
        <TabsContent value="joined" className="mt-6 space-y-6">
          {joinedEvents?.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {joinedEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
        </TabsContent>
      )}

      <TabsContent value="about" className="mt-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            {bio ? (
              <p className="text-slate-600 leading-relaxed">{bio}</p>
            ) : (
              <p className="text-slate-400 italic">No bio available</p>
            )}

            {role === "HOST" && hostedEvents?.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-4 mt-6">
                  Event Types Hosted
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set(
                      hostedEvents
                        .map((e) => e.type?.name)
                        .filter((name) => name)
                    )
                  ).map((typeName) => (
                    <Badge key={typeName} variant="outline">
                      {typeName}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {role === "HOST" && (
        <TabsContent value="reviews" className="mt-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              {reviews?.length > 0 ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b">
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                      <span className="text-2xl font-bold">
                        {ratingData.average.toFixed(1)}
                      </span>
                    </div>
                    <div className="text-slate-600">
                      <span className="font-semibold">{ratingData.count}</span>{" "}
                      {ratingData.count === 1 ? "review" : "reviews"}
                    </div>
                  </div>

                  {reviews?.map((review) => (
                    <div key={review._id}>
                      <div className="flex gap-4 items-start">
                        <Avatar>
                          <AvatarImage
                            src={review.user?.profile_photo}
                            alt={review.user?.name}
                          />
                          <AvatarFallback>
                            {review.user?.name?.charAt(0) || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-slate-900">
                              {review.user?.name || "Anonymous"}
                            </h4>
                            {review.createdAt && (
                              <span className="text-xs text-slate-400">
                                {format(
                                  new Date(review.createdAt),
                                  "MMM dd, yyyy"
                                )}
                              </span>
                            )}
                          </div>
                          <div className="flex text-amber-500 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? "fill-current"
                                    : "text-slate-200 fill-slate-200"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-slate-600 text-sm">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                      <Separator className="mt-4" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Star className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p className="text-slate-500">No reviews yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </>
  );
};


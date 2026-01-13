import ProfileTab from "@/components/module/Profile/ProfileTab";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getNameLetters } from "@/lib/getNameLetters";
import { IUser } from "@/types";
import { format } from "date-fns";
import { Calendar, MapPin, ShieldCheck, Star, Building2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types";
import { IReview } from "@/services/user/getUserReviews";
import getDefaultImageUrl from "@/constant/getDefaultImageUrl";

interface IProps {
  user: IUser;
  isOwner: boolean;
  hostedEvents: IEvent[];
  joinedEvents: IEvent[];
  reviews: IReview[];
}

const ProfileWrapper = ({
  user,
  isOwner,
  hostedEvents,
  joinedEvents,
  reviews,
}: IProps) => {
  const {
    interests,
    location,
    name,
    role,
    profile_photo,
    createdAt,
    bio,
    _id,
  } = user || {};

  const calculateAverageRating = () => {
    if (!reviews || reviews?.length === 0) return { average: 0, count: 0 };
    const sum = reviews?.reduce((acc, review) => acc + review.rating, 0);
    return { average: sum / reviews?.length, count: reviews?.length };
  };

  const ratingData = calculateAverageRating();

  const getRoleIcon = () => {
    switch (role) {
      case "ADMIN":
        return <ShieldCheck className="w-5 h-5 text-blue-500" />;
      case "HOST":
        return <Building2 className="w-5 h-5 text-purple-500" />;
      default:
        return <User className="w-5 h-5 text-slate-400" />;
    }
  };

  const getRoleBadgeVariant = () => {
    switch (role) {
      case "ADMIN":
        return "default";
      case "HOST":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden">
        <Image
          src={profile_photo || getDefaultImageUrl()}
          alt="Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative -mt-20 z-10">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="relative inline-block">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-lg mx-auto">
                    <AvatarImage
                      src={profile_photo}
                      alt={name}
                      className="object-cover"
                    />
                    <AvatarFallback className="font-bold text-lg">
                      {getNameLetters(name || "")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
                    {name}
                    {getRoleIcon()}
                  </h2>
                  <div className="flex items-center justify-center mt-1">
                    <Badge variant={getRoleBadgeVariant()} className="text-xs">
                      {role}
                    </Badge>
                  </div>
                  {bio && (
                    <p className="text-slate-500 font-medium text-sm mt-2 line-clamp-2">
                      {bio}
                    </p>
                  )}
                </div>

                {role === "HOST" && reviews?.length > 0 && (
                  <div className="flex items-center justify-center gap-1 text-amber-500 font-bold">
                    <Star className="w-5 h-5 fill-current" />
                    <span>{ratingData.average.toFixed(1)}</span>
                    <span className="text-slate-400 font-normal text-sm">
                      ({ratingData.count} {ratingData.count === 1 ? "review" : "reviews"})
                    </span>
                  </div>
                )}

                {role === "HOST" && reviews?.length === 0 && (
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-sm">
                    <Star className="w-4 h-4" />
                    <span>No reviews yet</span>
                  </div>
                )}

                {isOwner && (
                  <div className="flex flex-col gap-2 pt-2">
                    <Link href="/profile/edit">
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        Edit Profile
                      </Button>
                    </Link>
                  </div>
                )}

                <Separator />

                <div className="space-y-3 text-sm text-left px-2">
                  {location && (
                    <div className="flex items-center gap-3 text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{location}</span>
                    </div>
                  )}
                  {createdAt && (
                    <div className="flex items-center gap-3 text-slate-600">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        Joined{" "}
                        {format(new Date(createdAt), "MMMM yyyy")}
                      </span>
                    </div>
                  )}
                  {role === "HOST" && (
                    <div className="flex items-center gap-3 text-slate-600">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {hostedEvents?.length} hosted{" "}
                        {hostedEvents?.length === 1 ? "event" : "events"}
                      </span>
                    </div>
                  )}
                  {role === "USER" && (
                    <div className="flex items-center gap-3 text-slate-600">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {joinedEvents?.length} joined{" "}
                        {joinedEvents?.length === 1 ? "event" : "events"}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {interests && interests?.length > 0 && (
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">
                    Interests
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {interests.map((interest: string) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {interest}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <ProfileTab
            role={role || "USER"}
            hostedEvents={hostedEvents}
            joinedEvents={joinedEvents}
            reviews={reviews}
            bio={bio}
            userId={_id}
            isOwner={isOwner}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;

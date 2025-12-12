import ProfileTab from "@/components/module/Profile/ProfileTab";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getNameLetters } from "@/lib/getNameLetters";
import { IUser } from "@/types";
import { format } from "date-fns";
import { Calendar, MapPin, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

interface IProps {
    user: IUser
    isOwner: boolean
}

const ProfileWrapper = ({user, isOwner}: IProps) => {
    const { interests, location, name, role, profile_photo, createdAt, bio } = user || {};
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden">
        <Image
          src={profile_photo}
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
                    <AvatarImage src={profile_photo} className="object-cover" />
                    <AvatarFallback className="font-bold text-lg">
                      {getNameLetters(name)}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"
                    title="Online"
                  ></div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
                    {name}
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                  </h2>
                  {role === "ADMIN" ||
                    (role === "HOST" && (
                      <p className="text-slate-500 font-medium">{role}</p>
                    ))}
                  <p className="text-slate-500 font-medium">{bio}</p>
                </div>

                <div className="flex items-center justify-center gap-1 text-amber-500 font-bold">
                  <Star className="w-5 h-5 fill-current" />
                  <span>4.9</span>
                  <span className="text-slate-400 font-normal text-sm">
                    (124 reviews)
                  </span>
                </div>

                {isOwner && (
                  <div className="flex flex-col gap-2 pt-2">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Edit Profile
                    </Button>
                  </div>
                )}

                <Separator />

                <div className="space-y-3 text-sm text-left px-2">
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>
                      Joined{" "}
                      {format(new Date(createdAt || new Date()), "MMMM yy")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                    className={`px-3 py-1}`}
                  >
                    {interest}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          <ProfileTab />
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;

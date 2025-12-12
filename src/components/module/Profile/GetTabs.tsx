import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

const GetTabs = () => {
  return (
    <>
      <TabsContent value="events" className="mt-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
                alt="Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white">
                Tomorrow, 6:00 AM
              </Badge>
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 text-white hover:bg-black/20 hover:text-white rounded-full"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <Badge
                  variant="outline"
                  className="border-indigo-200 text-indigo-600 bg-indigo-50"
                >
                  Hiking
                </Badge>
                <span className="text-sm font-semibold text-slate-900">
                  $15.00
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                Golden Gate Sunrise Hike
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                Join us for a beautiful morning hike across the Golden Gate
                bridge. Beginners welcome! Coffee included.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex -space-x-2">
                  <Avatar className="w-7 h-7 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/100?img=1" />
                  </Avatar>
                  <Avatar className="w-7 h-7 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/100?img=2" />
                  </Avatar>
                  <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">
                    +8
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                >
                  Join Event
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
                alt="Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white">
                Sat, Oct 24
              </Badge>
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 text-white hover:bg-black/20 hover:text-white rounded-full"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <Badge
                  variant="outline"
                  className="border-purple-200 text-purple-600 bg-purple-50"
                >
                  Gaming
                </Badge>
                <span className="text-sm font-semibold text-slate-900">
                  Free
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                Retro Arcade Night
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                Relive the classics! Street Fighter, Pac-Man, and Pinball
                tournaments with prizes for high scores.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex -space-x-2">
                  <Avatar className="w-7 h-7 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/100?img=4" />
                  </Avatar>
                  <Avatar className="w-7 h-7 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/100?img=5" />
                  </Avatar>
                  <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">
                    +12
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                >
                  Join Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="about" className="mt-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Hey there! I&apos;m Sarah, a software engineer by day and an avid
              explorer by weekend. I moved to San Francisco last year and
              realized how hard it can be to find people to do specific
              activities with.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              I love organizing small group hikes and coffee tasting sessions.
              My events are usually laid back, beginner-friendly, and focused on
              good conversation. If you&apos;re new to the city or just looking
              to expand your circle, come join one of my meetups!
            </p>

            <h3 className="text-lg font-semibold mb-4">What I Host</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Weekend Morning Hikes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Tech Networking Coffees
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Urban Photography Walks
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Board Game Nights
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reviews" className="mt-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 space-y-6">
            <div className="flex gap-4 items-start">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/100?img=11" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-slate-900">Michael Ross</h4>
                  <span className="text-xs text-slate-400">2 days ago</span>
                </div>
                <div className="flex text-amber-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-600 text-sm">
                  Sarah is an amazing host! The hike was well planned, the pace
                  was perfect for everyone, and she made sure everyone felt
                  included. Highly recommend joining her events.
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex gap-4 items-start">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/100?img=8" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-slate-900">Jessica Lee</h4>
                  <span className="text-xs text-slate-400">1 week ago</span>
                </div>
                <div className="flex text-amber-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 text-slate-200 fill-slate-200" />
                </div>
                <p className="text-slate-600 text-sm">
                  Great coffee meetup. The venue was a bit loud, but the crowd
                  Sarah gathered was super interesting. Made some great
                  connections!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default GetTabs;

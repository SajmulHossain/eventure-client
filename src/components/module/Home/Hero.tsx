import Image from "next/image";
import { Search, MapPin, Users, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 selection:bg-indigo-500 selection:text-white pb-20 pt-20 lg:pt-32">
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col justify-center text-center lg:text-left z-10">
            <div className="flex justify-center lg:justify-start mb-6">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm rounded-full bg-white border-indigo-100 text-slate-600 shadow-sm hover:bg-white gap-2"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                </span>
                Live events happening now
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Connect via <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
                Real Experiences
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Don&apos;t let a lack of company stop you. Discover concerts, hikes,
              and meetups in your area. Find your tribe and turn online matches
              into offline memories.
            </p>

            <div className="w-full max-w-md mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-xl border border-slate-100 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Hiking, Gaming..."
                  className="pl-9 h-12 border-0 shadow-none bg-slate-50 focus-visible:ring-0 focus-visible:bg-white rounded-xl transition-all"
                />
              </div>
              <div className="relative flex-1 group">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="City or Zip"
                  className="pl-9 h-12 border-0 shadow-none bg-slate-50 focus-visible:ring-0 focus-visible:bg-white rounded-xl transition-all"
                />
              </div>
              <Button
                size="lg"
                className="h-12 px-8 rounded-xl bg-slate-900 hover:bg-indigo-600 shadow-lg shadow-indigo-200 transition-all duration-300"
              >
                Search
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Users className="w-5 h-5 text-indigo-500" />
                </div>
                <span>2k+ Active Groups</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-500" />
                </div>
                <span>500+ Daily Events</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full hidden md:block group perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-indigo-100/40 to-transparent blur-3xl -z-10"></div>

            <div className="grid grid-cols-2 gap-4 absolute inset-0 -rotate-6 group-hover:rotate-0 transition-transform duration-700 ease-out p-8 origin-center">
              <div className="space-y-4 pt-12">
                <Card className="relative overflow-hidden border-0 shadow-2xl h-64 transform transition-transform hover:-translate-y-2 rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600"
                    alt="Concert"
                    fill
                    className="object-cover scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge
                      variant="secondary"
                      className="bg-indigo-500/90 text-white border-none hover:bg-indigo-600 mb-2"
                    >
                      Music
                    </Badge>
                    <p className="font-bold">Indie Night</p>
                  </div>
                </Card>

                <Card className="relative overflow-hidden border-0 shadow-2xl h-48 transform transition-transform hover:-translate-y-2 rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600"
                    alt="Hiking"
                    fill
                    className="object-cover scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-500/90 text-white border-none hover:bg-emerald-600 mb-2"
                    >
                      Outdoors
                    </Badge>
                    <p className="font-bold">Sunrise Hike</p>
                  </div>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="relative overflow-hidden border-0 shadow-2xl h-48 transform transition-transform hover:-translate-y-2 rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=600"
                    alt="Gaming"
                    fill
                    className="object-cover scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/90 text-white border-none hover:bg-purple-600 mb-2"
                    >
                      Gaming
                    </Badge>
                    <p className="font-bold">Board Game Cafe</p>
                  </div>
                </Card>

                <Card className="relative overflow-hidden border-0 shadow-2xl h-64 transform transition-transform hover:-translate-y-2 rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600"
                    alt="Friends"
                    fill
                    className="object-cover scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge
                      variant="secondary"
                      className="bg-pink-500/90 text-white border-none hover:bg-pink-600 mb-2"
                    >
                      Social
                    </Badge>
                    <p className="font-bold">City Brunch</p>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="absolute top-20 right-10 bg-white/90 backdrop-blur-md border-white/20 p-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Avatar className="border-2 border-white w-10 h-10">
                    <AvatarImage src="https://i.pravatar.cc/100?img=12" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10">
                    <AvatarImage src="https://i.pravatar.cc/100?img=32" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10">
                    <AvatarImage src="https://i.pravatar.cc/100?img=41" />
                    <AvatarFallback>CK</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                    <span className="text-xs font-bold text-slate-800">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Trusted Hosts
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
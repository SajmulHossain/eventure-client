import Image from "next/image";
import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24 pb-32">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-linear-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-linear-to-tr from-blue-50 to-pink-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
            <Badge
              variant="outline"
              className="w-fit px-4 py-1.5 rounded-full border-indigo-200 bg-indigo-50/50 text-indigo-700 text-sm font-medium backdrop-blur-sm gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000"
            >
              <Sparkles className="w-3.5 h-3.5 fill-indigo-700" />
              <span>The #1 Platform for Offline Connections</span>
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              Less Scrolling. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                More Living.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Stop waiting for the <q>right time</q> to go out. Join a community
              of explorers, creators, and hobbyists making memories in the real
              world today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 text-base"
              >
                <Link href={"/events"}>Explore Events</Link>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar
                    key={i}
                    className="w-12 h-12 border-4 border-white ring-1 ring-slate-100"
                  >
                    <AvatarImage
                      src={`https://i.pravatar.cc/100?img=${20 + i}`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-indigo-50 flex items-center justify-center text-xs font-bold text-indigo-600 ring-1 ring-slate-100">
                  +2k
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm font-medium text-slate-600">
                  from happy members
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none perspective-1000 animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="relative aspect-4/5 md:aspect-square lg:aspect-10/8 rounded-[40px] overflow-hidden shadow-2xl shadow-indigo-200/50">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                alt="Friends laughing at a dinner party"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="absolute top-10 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden md:block animate-bounce duration-3000">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">New Friend!</p>
                  <p className="text-xs text-slate-500">
                    Sarah joined &quot;Hiking&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
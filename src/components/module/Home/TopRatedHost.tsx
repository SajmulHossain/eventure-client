import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const hosts = [
  {
    name: "Alex Johnson",
    role: "Adventure Lead",
    rating: 4.9,
    events: 12,
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Maria Garcia",
    role: "Food Critic",
    rating: 5.0,
    events: 24,
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "David Kim",
    role: "Board Game Master",
    rating: 4.8,
    events: 8,
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sarah Williams",
    role: "Yoga Instructor",
    rating: 4.9,
    events: 30,
    img: "https://i.pravatar.cc/150?img=9",
  },
];

const TopRatedHost = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-bold text-slate-900">Meet Top Hosts</h2>
          <Button variant="outline">View All Hosts</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hosts.map((host, idx) => (
            <Card
              key={idx}
              className="text-center hover:border-indigo-200 transition-colors border-slate-100 shadow-sm"
            >
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-slate-50">
                  <AvatarImage src={host.img} />
                  <AvatarFallback>{host.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg text-slate-900">
                  {host.name}
                </h3>
                <p className="text-sm text-indigo-600 font-medium mb-2">
                  {host.role}
                </p>
                <div className="flex items-center justify-center gap-1 text-amber-500 text-sm mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-slate-700">
                    {host.rating}
                  </span>
                  <span className="text-slate-400">({host.events} events)</span>
                </div>
                <Button size="sm" variant="secondary" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedHost;
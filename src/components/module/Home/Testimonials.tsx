import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "I moved to a new city and didn't know anyone. Through this platform, I found a hiking group that I now meet with every weekend. It changed my life!",
    author: "Emily Chen",
    role: "User",
    img: "https://i.pravatar.cc/150?img=9",
  },
  {
    text: "Hosting events here is so seamless. The payment system is easy, and the attendees are always respectful and eager to connect.",
    author: "Marcus Thorne",
    role: "Event Host",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    text: "Finally, a social app that actually makes you social. No endless swiping, just real plans with real people.",
    author: "Jessica Alverez",
    role: "User",
    img: "https://i.pravatar.cc/150?img=5",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
          What our community says
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-white border-none shadow-lg relative overflow-visible mt-6 md:mt-0"
            >
              <div className="absolute -top-6 left-8 bg-indigo-600 rounded-full p-3 shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <CardContent className="pt-12 pb-8 px-8">
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  <q>{t.text}</q>
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={t.img} />
                    <AvatarFallback>{t.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {t.author}
                    </h4>
                    <span className="text-xs text-indigo-600 font-medium">
                      {t.role}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { Card } from "@/components/ui/card";
import Image from "next/image";

const categories = [
  {
    name: "Hiking & Outdoors",
    count: "120+ Events",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Food & Drink",
    count: "85+ Events",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Art & Culture",
    count: "45+ Events",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3969104?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Tech & Coding",
    count: "60+ Events",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Board Games",
    count: "30+ Events",
    img: "https://images.unsplash.com/photo-1610890716171-6b1c9f20ad82?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Music & Concerts",
    count: "90+ Events",
    img: "https://images.unsplash.com/photo-1459749411177-0473ef7161a8?q=80&w=400&auto=format&fit=crop",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center sm:text-left">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Card
              key={idx}
              className="group cursor-pointer border-none shadow-md hover:shadow-lg transition-all overflow-hidden relative aspect-square"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 z-10">
                <h3 className="text-white font-bold text-base md:text-lg drop-shadow-md">
                  {cat.name}
                </h3>
                <p className="text-white/80 text-xs mt-1 font-medium">
                  {cat.count}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
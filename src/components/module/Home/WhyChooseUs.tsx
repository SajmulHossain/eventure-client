import { ShieldCheck, Users, HeartHandshake } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why we are the best place to find your community.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We prioritize safety, authenticity, and real connections. Unlike
              other platforms, we focus on getting you offline and into the
              moment.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg h-fit">
                  <ShieldCheck className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Verified Hosts</h3>
                  <p className="text-slate-400">
                    Every event creator goes through a verification process to
                    ensure your safety.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-pink-600/20 p-3 rounded-lg h-fit">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Small Groups</h3>
                  <p className="text-slate-400">
                    We encourage intimate group sizes to foster meaningful
                    conversations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-emerald-600/20 p-3 rounded-lg h-fit">
                  <HeartHandshake className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">No Hidden Fees</h3>
                  <p className="text-slate-400">
                    Transparent pricing. What you see is what you pay.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Friends hanging out"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

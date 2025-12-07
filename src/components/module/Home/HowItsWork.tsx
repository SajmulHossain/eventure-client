import { UserPlus, Search, CalendarCheck, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create an Account",
    description:
      "Sign up in seconds and build your profile with your interests and hobbies.",
  },
  {
    icon: Search,
    title: "Discover Activities",
    description:
      "Browse local events or create your own to find people with similar interests.",
  },
  {
    icon: CalendarCheck,
    title: "Join & Participate",
    description:
      "Book your spot, chat with the host, and get ready for a real-world experience.",
  },
  {
    icon: MessageCircle,
    title: "Connect & Repeat",
    description:
      "Meet new friends, leave reviews, and grow your local network.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Going from online to offline has never been easier. Here&apos;s how to
            get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-indigo-100 group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
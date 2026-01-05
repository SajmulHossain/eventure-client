import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-indigo-600 px-6 py-20 text-center sm:px-12 md:px-24 lg:py-24">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full opacity-50 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to find your people?
            </h2>
            <p className="text-indigo-100 text-lg">
              Join thousands of others who are making new friends and trying new
              things every day. It&apos;s free to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold h-12 px-8"
              >
                <Link href={"/events"}>Get Started Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
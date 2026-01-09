import { Suspense } from "react";
import CTA from "@/components/module/Home/CTA";
import FeaturedEvents from "@/components/module/Home/FeaturedEvents";
import Hero from "@/components/module/Home/Hero";
import HowItWorks from "@/components/module/Home/HowItsWork";
import Testimonials from "@/components/module/Home/Testimonials";
import Types from "@/components/module/Home/Types";
import WhyChooseUs from "@/components/module/Home/WhyChooseUs";
import { EventCardSkeletonGrid } from "@/components/shared/skeletons";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <div className="h-10 bg-slate-200 rounded w-48 mb-2 animate-pulse" />
              <div className="h-5 bg-slate-200 rounded w-64 animate-pulse" />
            </div>
            <EventCardSkeletonGrid count={3} />
          </div>
        </section>
      }>
        <FeaturedEvents />
      </Suspense>
      <HowItWorks />
      <Types />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;

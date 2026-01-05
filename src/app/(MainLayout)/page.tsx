import CTA from "@/components/module/Home/CTA";
import FeaturedEvents from "@/components/module/Home/FeaturedEvents";
import Hero from "@/components/module/Home/Hero";
import HowItWorks from "@/components/module/Home/HowItsWork";
import Testimonials from "@/components/module/Home/Testimonials";
import Types from "@/components/module/Home/Types";
import WhyChooseUs from "@/components/module/Home/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedEvents />
      <HowItWorks />
      <Types />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;

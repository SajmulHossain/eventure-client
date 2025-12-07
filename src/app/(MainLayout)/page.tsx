import Categories from "@/components/module/Home/Categories";
import FeaturedEvents from "@/components/module/Home/FeaturedEvents";
import Hero from "@/components/module/Home/Hero";
import HowItWorks from "@/components/module/Home/HowItsWork";
import Testimonials from "@/components/module/Home/Testimonials";
import TopRatedHost from "@/components/module/Home/TopRatedHost";
import WhyChooseUs from "@/components/module/Home/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedEvents />
      <HowItWorks />
      <Categories />
      <TopRatedHost />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default HomePage;

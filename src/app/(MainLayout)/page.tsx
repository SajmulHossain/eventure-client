import Categories from "@/components/module/Home/Categories";
import FeaturedEvents from "@/components/module/Home/FeaturedEvents";
import Hero from "@/components/module/Home/Hero";
import HowItWorks from "@/components/module/Home/HowItsWork";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedEvents />
      <HowItWorks />
      <Categories />
    </>
  );
};

export default HomePage;

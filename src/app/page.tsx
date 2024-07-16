import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MovingGrid from "@/components/MovingGrid";
import UpcomingWebinars from "@/components/UpcomingWebinars"
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" w-full   bg-black">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MovingGrid/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </div>
  
  );
}

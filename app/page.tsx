import ContactUs from "@/components/section/Home/Contact";
import Experience from "@/components/section/Home/Experience";
import OurGoal from "@/components/section/Home/Goal";
import Hero from "@/components/section/Home/Hero";
import Testimonials from "@/components/section/Home/Testimonials";
import Vision from "@/components/section/Home/Vision";
import PortfolioSection from "@/components/section/Home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <OurGoal />
      <PortfolioSection />
      <Experience />
      <Testimonials />
      <ContactUs />
    </>
  );
}

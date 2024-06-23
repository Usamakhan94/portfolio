import OurGoal from "@/components/section/Home/Goal";
import Hero from "@/components/section/Home/Hero";
import Vision from "@/components/section/Home/Vision";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Hero />
      <Vision />
      <OurGoal />
    </Suspense>
  );
}

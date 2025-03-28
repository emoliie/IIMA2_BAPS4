import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import UseSection from "@/components/landing/UseSection";
import ApproachSection from "@/components/landing/ApproachSection";
import EndSection from "@/components/landing/EndSection";
import { ChevronUp } from "lucide-react";

export default async function page() {
  return (
    <>
      <HeroSection />
      <UseSection />
      <ApproachSection />
      <EndSection />
    </>
  );
}

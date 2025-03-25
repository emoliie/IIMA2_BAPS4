import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import UseSection from "@/components/landing/UseSection";
import ApproachSection from "@/components/landing/ApproachSection";
import EndSection from "@/components/landing/EndSection";
import Footer from "@/components/Footer";

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

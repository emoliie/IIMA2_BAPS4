import React from "react";
import Navbar from "@/components/Navbar";
import { supabaseServer } from "@/lib/supabase/server";
import HeroSection from "@/components/landing/HeroSection";
import UseSection from "@/components/landing/UseSection";
import ApproachSection from "@/components/landing/ApproachSection";
import EndSection from "@/components/landing/EndSection";
import Footer from "@/components/Footer";

export default async function page() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <Navbar user={data.session?.user} />
      <HeroSection />
      <UseSection />
      <ApproachSection />
      <EndSection />
      <Footer />
    </>
  );
}

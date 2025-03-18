import React from "react";
import Navbar from "@/components/Navbar";
import { supabaseServer } from "@/lib/supabase/server";
import HeroSection from "@/components/HeroSection";
import UseSection from "@/components/UseSection";

export default async function page() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <Navbar user={data.session?.user} />
      <HeroSection />
      <UseSection />
    </>
  );
}

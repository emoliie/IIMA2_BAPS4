import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterForm";
import { supabaseServer } from "@/lib/supabase/server";
import React from "react";

export default async function page() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navbar user={user ?? undefined} />
      <RegisterForm />
      <Footer />
    </>
  );
}

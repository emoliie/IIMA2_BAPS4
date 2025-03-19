import Navbar from "@/components/Navbar";
import React from "react";
import { supabaseServer } from "@/lib/supabase/server";
import Login from "@/components/LoginForm";
import Footer from "@/components/Footer";

export default async function page() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navbar user={user ?? undefined} />
      <Login />
      <Footer />
    </>
  );
}

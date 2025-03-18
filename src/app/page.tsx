import React from "react";
import Navbar from "@/components/Navbar";
import { supabaseServer } from "@/lib/supabase/server";

export default async function page() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <Navbar user={data.session?.user} />
    </>
  );
}

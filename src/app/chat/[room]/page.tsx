import React from "react";
import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatroom from "@/components/chat/Chatroom";

interface PageParams {
  room: string;
}

export default async function page({ params }: { params: PageParams }) {

  
  return (
    <>
      <Navbar />
      <Chatroom room={params.room}/>
      <Footer />
      {/* <InitUser user={data.session?.user} /> */}
    </>
  );
}

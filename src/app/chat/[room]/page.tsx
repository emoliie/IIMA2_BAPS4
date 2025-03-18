import React from "react";
import InitUser from "@/lib/store/InitUser";
import ChatInput from "@/components/ChatInput";
import { supabaseServer } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import ListMessages from "@/components/ListMessages";

export default async function page({ params }) {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();

  return (
    <>
      <Navbar user={data.session?.user} />
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col relative">
          <ListMessages chatroomId={params.room} />
          <ChatInput />
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}

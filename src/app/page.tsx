import React from "react";
import ChatHeader from "@/components/ChatHeader";
import InitUser from "@/lib/store/InitUser";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import { supabaseServer } from "@/lib/supabase/server";

export default async function page() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col relative">
          <ChatHeader user={data.session?.user} />
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}

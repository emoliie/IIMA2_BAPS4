import React from "react";
import ChatHeader from "@/components/ChatHeader";
import { supabaseBrowser } from "@/lib/supabase/browser";
import InitUser from "@/lib/store/InitUser";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";

export default async function page() {
  const supabase = supabaseBrowser();

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

import React from "react";
import InitUser from "@/lib/store/InitUser";
import ChatInput from "@/components/ChatInput";
import { supabaseServer } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import ListMessages from "@/components/ListMessages";
import UsersList from "@/components/UsersList";

export default async function page({ params }) {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    .neq("id", user.id);

  return (
    <>
      <Navbar user={data.session?.user} />
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex relative w-full">
          <UsersList user={user ?? undefined} users={users ?? []} />
          <div className="h-full flex flex-col w-3/4 flex-3">
            <ListMessages chatroomId={params.room} />
            <ChatInput />
          </div>
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}

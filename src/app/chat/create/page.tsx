import CreateChatroom from "@/components/chat/CreateChatroom";
import { supabaseServer } from "@/lib/supabase/server";
import React from "react";

export default async function page() {
  const supabase = await supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    .neq("id", user.id);

  return <CreateChatroom user={user ?? undefined} users={users ?? []} />;
}

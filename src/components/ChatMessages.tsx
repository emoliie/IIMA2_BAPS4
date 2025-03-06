import { Suspense } from "react";
import ListMessages from "./ListMessages";
import { supabaseServer } from "@/lib/supabase/server";
import InitMessages from "@/lib/store/InitMessages";

export default async function ChatMessages() {
  const supabase = await supabaseServer(); // Use the server-side Supabase client
  const { data, error } = await supabase
    .from("messages")
    .select("*, users(*)")
    .range(0, 20)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching messages:", error);
  }

  return (
    <Suspense fallback={"Loading.."}>
      <ListMessages />
      <InitMessages messages={data?.reverse() || []} />
    </Suspense>
  );
}

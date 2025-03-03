import React from "react";
import ChatHeader from "@/components/ChatHeader";
import { supabaseClient } from "@/lib/supabase/client";
import InitUser from "@/lib/store/InitUser";
import { Input } from "@/components/ui/input";

export default async function page() {
  const supabase = supabaseClient();

  const { data } = await supabase.auth.getSession();

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col">
          <ChatHeader user={data.session?.user} />
          <div className="flex-1 flex flex-col p-5">
            <div className="flex-1"></div>
            <div>
              <div className="flex gap-2">
                <div className="h-10 w-10 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h2 className="font-bold">Name</h2>
                    <h3 className="text-sm text-gray-500">{new Date().toDateString()}</h3>
                  </div>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusamus quod natus itaque ullam in sint assumenda, magni adipisci dicta quibusdam inventore voluptate possimus distinctio mollitia deleniti tempora nostrum saepe.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <Input placeholder="Envoyer un message" />
          </div>
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}

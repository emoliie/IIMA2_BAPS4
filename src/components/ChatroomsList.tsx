"use client";

import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ChatroomsList({
  user,
  chatrooms,
}: {
  user: User;
  chatrooms: [];
}) {
  const router = useRouter();

  useEffect(() => {
    if (!chatrooms || !Array.isArray(chatrooms)) {
      console.error("Chatrooms is not an array:", chatrooms);
      router.push("/");
    }
  }, [chatrooms, router]);

  return (
    <aside className="w-1/4 border-r">
      {/* {users.map((user) => (
        <div key={user.id} className="flex items-center gap-2 p-2">
          <Image
            src={user.avatar_url}
            alt={`Avatar of ${user.display_name}`}
            width={40}
            height={40}
            className="rounded-full ring-2"
          />
          <h2 className="font-bold">{user.display_name}</h2>
        </div>
      ))} */}

      {chatrooms.map((chatroom) => (
        <div key={chatroom.id} className="flex items-center gap-2 p-2">
          {chatroom.recipient1 !== user.id ? (
            <h2 className="font-bold">{chatroom.recipient1}</h2>
          ) : (
            <h2 className="font-bold">{chatroom.recipient2}</h2>
          )}
        </div>
      ))}
    </aside>
  );
}

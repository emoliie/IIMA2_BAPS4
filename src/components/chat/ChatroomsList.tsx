"use client";

import { ChatRoom } from "@/lib/store/chatrooms";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ChatroomsList({
  user,
  chatrooms,
}: {
  user: User;
  chatrooms: ChatRoom[];
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
      {chatrooms.map((chatroom) => (
        <div key={chatroom.id}>
          {chatroom.recipient1.id !== user.id ? (
            <div
              className="flex items-center gap-2 p-4 border-b cursor-pointer"
              onClick={() => {
                router.push(`/chat/${chatroom.id}`);
                router.refresh();
              }}
            >
              <Image
                src={chatroom.recipient1.avatar_url}
                alt={`Avatar of ${chatroom.recipient1.display_name}`}
                width={40}
                height={40}
                className="rounded-full ring-2"
              />
              <h2 className="font-bold">{chatroom.recipient1.display_name}</h2>
            </div>
          ) : (
            <div
              className="flex items-center gap-2 p-4 border-b cursor-pointer"
              onClick={() => {
                router.push(`/chat/${chatroom.id}`);
                router.refresh();
              }}
            >
              <Image
                src={chatroom.recipient2.avatar_url}
                alt={`Avatar of ${chatroom.recipient2.display_name}`}
                width={40}
                height={40}
                className="rounded-full ring-2"
              />
              <h2 className="font-bold">{chatroom.recipient2.display_name}</h2>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}

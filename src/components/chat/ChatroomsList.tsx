"use client";

import { useSession } from "@/lib/hooks/useSession";
import { ChatRoom } from "@/lib/store/chatrooms";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ChatroomsList({
  chatrooms,
}: {
  chatrooms: ChatRoom[];
}) {
  const router = useRouter();
  const { getSession } = useSession();
  const sessionUserId = getSession();

  if (!sessionUserId) {
    console.error("Pas d'utilisateurs connectés", sessionUserId);
    router.push("/");
  }

  useEffect(() => {
    if (!chatrooms || !Array.isArray(chatrooms)) {
      console.error("Chatrooms is not an array:", chatrooms);
      router.push("/");
    }
  }, [chatrooms, router]);

  return (
    <aside className="w-1/4 border rounded-lg overflow-hidden">
      <div className="bg-primaryBlue p-5">
        <p className="text-white font-semibold text-center">Messages privés</p>
      </div>
      {chatrooms.map((chatroom) => (
        <div key={chatroom.id}>
          {chatroom.recipient1.id !== sessionUserId ? (
            <div
              className="flex items-center gap-2 p-4 border-b cursor-pointer"
              onClick={() => {
                router.push(`/chat/${chatroom.id}`);
                router.refresh();
              }}
            >
              <Image
                src="/avatar.png"
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
                src="/avatar.png"
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

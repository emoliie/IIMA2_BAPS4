"use client";

import React, { useEffect, useState } from "react";
import ListMessages from "@/components/chat/ListMessages";
import ChatroomsList from "@/components/chat/ChatroomsList";
import ChatInput from "@/components/chat/ChatInput";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useSession } from "@/lib/hooks/useSession";
import { useParams, useRouter } from "next/navigation";

interface ChatroomProps {
  room: string;
}

export default function Chatroom(props: ChatroomProps) {
  const { room } = props;

  const supabase = supabaseBrowser();
  const { getSession } = useSession();
  const router = useRouter();

  const [chatrooms, setChatrooms] = useState<any[]>([]);
  const [recipientName, setRecipientName] = useState<string | null>(null); // State for recipient's name

  const sessionUserId = getSession();

  useEffect(() => {
    async function fetchChatrooms() {
      if (!sessionUserId) {
        router.push("/");
      }

      try {
        const { data: chatrooms, error } = await supabase
          .from("chatrooms")
          .select(
            `
              id,
              recipient1:users!recipient1(*),
              recipient2:users!recipient2(*)
            `
          )
          .or(`recipient1.eq.${sessionUserId},recipient2.eq.${sessionUserId}`);

        if (error) {
          console.log("Erreur lors de la récupération des chatrooms:", error);
        } else {
          setChatrooms(chatrooms || []);

          // Find the current chatroom and set the recipient's name
          const currentChatroom = chatrooms?.find(
            (chatroom) => chatroom.id === room
          );
          if (currentChatroom) {
            const recipient =
              (currentChatroom.recipient1 as any).id === sessionUserId
                ? currentChatroom.recipient2
                : currentChatroom.recipient1;
            setRecipientName(recipient.display_name);
          }
        }
      } catch (error) {
        console.error("Erreur inattendue:", error);
      }
    }

    fetchChatrooms();
  }, [sessionUserId, room]);

  return (
    <div className="max-w-3xl mx-auto h-screen flex items-center justify-center">
      <div className="h-4/5 flex relative w-full gap-8">
        <ChatroomsList chatrooms={chatrooms ?? []} />
        {room && (
          <div className="border rounded-lg overflow-hidden h-full flex flex-col w-3/4 flex-3">
            <div className="bg-gray-200 p-5">
              <p className="font-semibold">
                {recipientName || "Chargement..."}
              </p>
            </div>
            <ListMessages chatroomId={room} />
            <ChatInput chatroomId={room} />
          </div>
        )}
      </div>
    </div>
  );
}

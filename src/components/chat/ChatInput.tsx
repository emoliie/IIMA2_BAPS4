"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { Imessage, useMessage } from "@/lib/store/messages";
import { useSession } from "@/lib/hooks/useSession";
import { useUser } from "@/lib/hooks/useUser";

interface ChatInputProps {
  chatroomId: string | null; // Ensure we get a valid chatroom ID
}

export default function ChatInput({ chatroomId }: ChatInputProps) {
  const addMessage = useMessage((state) => state.addMessage);
  const setOptimisticIds = useMessage((state) => state.setOptimisticIds);
  const supabase = supabaseBrowser();

  const { getSession } = useSession();
  const { getUser } = useUser();
  const sessionUserId = getSession();

  const user = getUser();

  console.log(user);

  const handleSendMessage = async (text: string) => {
    if (text.trim()) {
      const id = uuidv4(); // Generate uuid
      const newMessage = {
        id,
        text,
        send_by: sessionUserId,
        is_edit: false,
        created_at: new Date().toISOString(),
        user: {
          id: sessionUserId,
          // avatar_url: user?.user_metadata.avatar_url,
          created_at: new Date().toISOString(),
          display_name: user?.display_name,
        },
      };

      console.log(newMessage);

      addMessage(newMessage as Imessage);
      setOptimisticIds(newMessage.id);

      if (sessionUserId !== null && chatroomId !== null) {
        const { error } = await supabase.from("messages").insert({
          text,
          id,
          send_by: sessionUserId || "",
          chatroom_id: chatroomId || "", // Ensure chatroom_id is provided
        });
        if (error) {
          toast.error(error.message);
        }
      }
    }
  };
  return (
    <div className="p-5">
      <Input
        placeholder="Envoyer un message"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}

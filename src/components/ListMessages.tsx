"use client";
import { Imessage, useMessage } from "@/lib/store/messages";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { DeleteAlert, EditAlert } from "./MessageActions";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";
import { ArrowDown } from "lucide-react";

export default function ListMessages({ chatroomId }: { chatroomId: string }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [userScrolled, setUserScrolled] = useState(false);
  const [notification, setNotification] = useState(0);

  const {
    messages,
    addMessage,
    optimisticIds,
    optimisticDeleteMessage,
    optimisticUpdateMessage,
  } = useMessage((state) => state);

  const supabase = supabaseBrowser();

  // Fetch messages for the selected chatroom
  useEffect(() => {
    const fetchMessages = async () => {
      if (!chatroomId) return; // Prevent fetch if chatroomId is undefined

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("chatroom_id", chatroomId) // Only get messages for this chatroom
        .order("created_at", { ascending: true });

      if (error) {
        toast.error(error.message);
      } else {
        data.forEach(async (msg) => {
          const { data: userData, error: userError } = await supabase
            .from("users")
            .select("*")
            .eq("id", msg.send_by)
            .single();

          if (!userError) {
            addMessage({ ...msg, users: userData } as Imessage);
          }
        });
      }
    };

    fetchMessages();
  }, [chatroomId]);

  // REAL-TIME
  useEffect(() => {
    if (!chatroomId) return;

    const channel = supabase
      .channel(`chatroom-${chatroomId}`) // Unique channel per chatroom
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chatroom_id=eq.${chatroomId}`,
        },
        async (payload) => {
          if (!optimisticIds.includes(payload.new.id)) {
            const { error, data } = await supabase
              .from("users")
              .select("*")
              .eq("id", payload.new.send_by)
              .single();

            if (!error) {
              const newMessage = { ...payload.new, users: data };
              addMessage(newMessage as Imessage);
            }
          }

          const scrollContainer = scrollRef.current;
          if (
            scrollContainer?.scrollTop ??
            0 <
              (scrollContainer?.scrollHeight ?? 0) -
                (scrollContainer?.clientHeight ?? 0) -
                10
          ) {
            setNotification((current) => current + 1);
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "messages" },
        (payload) => {
          optimisticDeleteMessage(payload.old.id);
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "messages" },
        (payload) => {
          optimisticUpdateMessage(payload.new as Imessage);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [messages]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer && !userScrolled) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages]);

  const handleOnScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const isScroll =
        scrollContainer.scrollTop <
        scrollContainer.scrollHeight - scrollContainer.clientHeight - 10;
      setUserScrolled(isScroll);
      if (
        scrollContainer.scrollTop ===
        scrollContainer.scrollHeight - scrollContainer.clientHeight
      ) {
        setNotification(0);
      }
    }
  };

  const scrollDown = () => {
    setNotification(0);
    scrollRef.current?.scrollTo({
      top: scrollRef.current?.scrollHeight ?? 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="flex-1 flex flex-col p-5 h-full overflow-y-auto"
        ref={scrollRef}
        onScroll={handleOnScroll}
      >
        <div className="flex-1 pb-5 "></div>
        <div className="space-y-7">
          {messages.map((value, index) => {
            return <Message key={index} message={value} />;
          })}
        </div>

        <DeleteAlert />
        <EditAlert />
      </div>
      {userScrolled && (
        <div className="absolute bottom-20 w-full">
          {notification ? (
            <div
              className="w-36 mx-auto bg-blue-500 p-1 rounded-md cursor-pointer text-white"
              onClick={scrollDown}
            >
              <h1>New {notification} messages</h1>
            </div>
          ) : (
            <div
              className="w-10 h-10 bg-blue-500 rounded-full justify-center items-center flex mx-auto border cursor-pointer hover:scale-110 transition-all text-white"
              onClick={scrollDown}
            >
              <ArrowDown />
            </div>
          )}
        </div>
      )}
    </>
  );
}

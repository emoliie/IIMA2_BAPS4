import { Imessage } from "@/lib/store/messages";
import Image from "next/image";
import React from "react";

export default function Message({ message }: { message: Imessage }) {
  const avatarUrl = message.users?.avatar_url || "/default-avatar.png"; // Default image
  const displayName = message.users?.display_name || "Unknown User"; // Fallback for alt
  return (
    <div className="flex gap-2" key={message?.id}>
      <div>
        <Image
          src={avatarUrl}
          alt={`Avatar of ${displayName}`}
          width={40}
          height={40}
          className="rounded-full ring-2"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <h2 className="font-bold">{message.users?.display_name}</h2>
          <h3 className="text-sm text-gray-500">
            {new Date(message.created_at!).toDateString()}
          </h3>
        </div>
        <p className="text-gray-800">{message?.text}</p>
      </div>
    </div>
  );
}

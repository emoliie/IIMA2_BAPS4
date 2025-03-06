import { Imessage, useMessage } from "@/lib/store/messages";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useUser } from "@/lib/store/user";
import { toast } from "sonner";

export default function Message({ message }: { message: Imessage }) {
  const avatarUrl = message.users?.avatar_url || "/default-avatar.png"; // Default image
  const displayName = message.users?.display_name || "Unknown User"; // Fallback for alt

  const user = useUser((state) => state.user);
  console.log("Current User:", user); // TODO: user undefined

  if (!user) {
    toast.error("Veuillez vous connecter")
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h2 className="font-bold">{message.users?.display_name}</h2>
            <h3 className="text-sm text-gray-500">
              {new Date(message.created_at!).toLocaleDateString(
                "fr-FR",
                options
              )}
            </h3>
            {message.is_edit && (
              <p className="text-sm text-gray-400">Modifié</p>
            )}
          </div>

          {message.users?.id === user?.id && <MessageMenu message={message} />}
        </div>
        <p className="text-gray-800">{message?.text}</p>
      </div>
    </div>
  );
}

const MessageMenu = ({ message }: { message: Imessage }) => {
  const setActionMessage = useMessage((state) => state.setActionMessage);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            document.getElementById("trigger-edit")?.click();
            setActionMessage(message);
          }}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            document.getElementById("trigger-delete")?.click();
            setActionMessage(message);
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

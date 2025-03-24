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
import { useSession } from "@/lib/hooks/useSession";
import { useUser } from "@/lib/hooks/useUser";

export default function Message({ message }: { message: Imessage }) {
  // const user = useMessage((state) => state.user);

  const { getSession } = useSession();
  const { getUser } = useUser();
  const sessionUserId = getSession();
  const user = getUser();
  const displayName = message.user?.display_name!;

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
          src="/avatar.png"
          alt={`Avatar of ${displayName}`}
          width={40}
          height={40}
          className="rounded-full ring-2"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h2 className="font-bold">{displayName}</h2>
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

          {message.user?.id === sessionUserId && (
            <MessageMenu message={message} />
          )}
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
          Modifier
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            document.getElementById("trigger-delete")?.click();
            setActionMessage(message);
          }}
        >
          Supprimer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

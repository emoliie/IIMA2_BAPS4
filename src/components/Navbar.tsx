"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Search } from "lucide-react";
import { useSession } from "@/lib/hooks/useSession";

export default function Navbar() {
  const router = useRouter();
  const { getSession, destroySession } = useSession();

  const supabase = supabaseBrowser();
  const sessionUserId = getSession();

  const [firstChat, setFirstChat] = useState<any>(null);

  const loadChats = async () => {
    const firstChat = await supabase
      .from("chatrooms")
      .select("id")
      .or(`recipient1.eq.${sessionUserId},recipient2.eq.${sessionUserId}`)
      .limit(1);
    setFirstChat(firstChat.data?.length ? firstChat.data[0] : null);
  };

  useEffect(() => {
    loadChats();
  }, []);

  return (
    <nav className="flex top-0 justify-between items-center px-10 py-10 lg:px-32 lg:py-5 border-b-2 border-primaryBlue">
      <Link href="/" className="flex gap-4">
        <Image
          src="/site-logo.svg"
          alt="Logo Site"
          width={50}
          height={50}
        />
        <Image
          src="/Logo_Rueil-Malmaison.png"
          alt="Logo Rueil Malmaison"
          width={100}
          height={50}
        />
      </Link>

      {/* <div className="hidden lg:flex gap-2 bg-[#DEDEDE] px-5 py-2 rounded-full">
        <Search size={24} className="text-customGray" />
        <input
          type="text"
          placeholder="Rechercher"
          className="bg-transparent placeholder-customGray lg:w-96"
        />
      </div> */}

      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <Button className="bg-primaryBlue hover:bg-blue-600">
              Les Dons
            </Button>
          </Link>
        </li>

        {sessionUserId && firstChat && (
          <li>
            <Link
              href={`/chat/${firstChat.id}`}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src="/msgIcon.svg"
                alt="Icone messages"
                width={30}
                height={30}
              />
              <p className="text-primaryBlue text-xs">Messages</p>
            </Link>
          </li>
        )}

        <li>
          {sessionUserId ? (
            <Link
              href="/profile"
              className="flex flex-col justify-center items-center"
            >
              <Image
                src="/accountIcon.svg"
                alt="Icone profil"
                width={30}
                height={30}
              />
              <p className="text-primaryBlue text-xs">Compte</p>
            </Link>
          ) : (
            <Link
              href="/login"
              className="flex flex-col justify-center items-center"
            >
              <Image
                src="/accountIcon.svg"
                alt="Icone profil"
                width={30}
                height={30}
              />
              <p className="text-primaryBlue text-xs">Compte</p>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Search } from "lucide-react";
import { useSession } from "@/lib/hooks/useSession";

export default function Navbar() {
  const router = useRouter();
  const { getSession, destroySession } = useSession();

  const supabase = supabaseBrowser();
  // Function to handle logout
  const handleLogout = async () => {
    destroySession();
    router.push("/login");
  };

  const sessionUserId = getSession();
  // useEffect(() => {
  //   console.log("session id :", sessionUserId);
  // }, []);

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
    <nav className="flex top-0 justify-between items-center px-32 py-5 border-b-2 border-primaryBlue">
      <Link href="/">
        <Image
          src="/Logo_Rueil-Malmaison.png"
          alt="Logo Site"
          width={100}
          height={50}
          className="w-50"
        />
      </Link>

      <div className="flex gap-2 bg-[#DEDEDE] px-5 py-2 rounded-full">
        <Search size={24} className="text-customGray" />
        <input
          type="text"
          placeholder="Rechercher"
          className="bg-transparent placeholder-customGray w-96"
        />
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <Button className="bg-primaryBlue hover:bg-blue-600">
              Les Dons
            </Button>
          </Link>
        </li>

        {
          // sessionUserId &&
          firstChat && (
            <li>
              <Link href={`/chat/${firstChat.id}`}>
                <Button className="text-primaryBlue border border-primaryBlue">
                  Messages
                </Button>
              </Link>
            </li>
          )
        }

        <li>
          {sessionUserId ? (
            <Button
              onClick={handleLogout}
              className="text-primaryBlue border border-primaryBlue"
            >
              Déconnexion
            </Button>
          ) : (
            // <Button>Mon Compte</Button>
            <Link href="/login">
              <Button className="text-primaryBlue border border-primaryBlue">
                Connexion
              </Button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

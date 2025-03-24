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
  // Function to handle logout
  const handleLogout = async () => {
    destroySession();
    router.push("/login");
  };

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
      <Link href="/">
        <Image
          src="/Logo_Rueil-Malmaison.png"
          alt="Logo Site"
          width={100}
          height={50}
          className="w-20 lg:w-50"
        />
      </Link>


      <div className="hidden lg:flex gap-2 bg-[#DEDEDE] px-5 py-2 rounded-full">
        <Search size={24} className="text-customGray" />
        <input
          type="text"
          placeholder="Rechercher"
          className="bg-transparent placeholder-customGray lg:w-96"
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

        {sessionUserId && firstChat && (
          <li>
            <Link href={`/chat/${firstChat.id}`}>
              <Button className="text-primaryBlue border border-primaryBlue">
                Messages
              </Button>
            </Link>
          </li>
        )}

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

"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Search } from "lucide-react";

export default function Navbar({ user }: { user?: User }) {
  const router = useRouter();

  // Function to handle logout
  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout Error", error.message);
    } else {
      router.push("/"); // Redirige vers la page d'accueil après déconnexion
    }
  };

  return (
    <nav className="flex top-0 justify-between items-center px-32 py-5 border-b-2 border-[#003BAA]">
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
        <Search size={24} className="text-[#222222]" />
        <input
          type="text"
          placeholder="Rechercher"
          className="bg-transparent placeholder-[#222222] pr-20"
        />
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <Button className="bg-[#003BAA] hover:bg-blue-600">Mes Dons</Button>
          </Link>
        </li>

        {user && (
          <li>
            <Link href="/chat">
              <Button className="text-[#003BAA] border border-[#003BAA]">
                Messages
              </Button>
            </Link>
          </li>
        )}

        <li>
          {user ? (
            <Button
              onClick={handleLogout}
              className="text-[#003BAA] border border-[#003BAA]"
            >
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button className="text-[#003BAA] border border-[#003BAA]">
                Connexion
              </Button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

"use client";

import { useSession } from "@/lib/hooks/useSession";
import { supabaseBrowser } from "@/lib/supabase/browser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { getSession, destroySession } = useSession();
  const sessionUserId = getSession();
  const supabase = supabaseBrowser();
  const router = useRouter();

  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", sessionUserId || "")
        .single();

      setUsername(data?.display_name);
      setEmail(data?.email);
      return data;
    }
    fetchUser();
  });

  const handleLogout = async () => {
    destroySession();
    router.push("/login");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mb-6">Mon profil</h1>
      <div className="bg-customWhite rounded-2xl w-full max-w-2xl py-10 flex flex-col items-center justify-center">
        <Image
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
          className="bg-white rounded-full"
        />
        <h2 className="text-2xl">{username}</h2>
        <p>{email}</p>
        <Button onClick={handleLogout} className="bg-secondaryGreen text-white">
          Déconnexion
        </Button>
      </div>
    </div>
  );
}

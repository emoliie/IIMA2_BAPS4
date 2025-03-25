"use client";

import { useSession } from "@/lib/hooks/useSession";
import { supabaseBrowser } from "@/lib/supabase/browser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Pen } from "lucide-react";
import EditProfile from "./EditProfile";

export default function UserInfo() {
  const { getSession, destroySession } = useSession();
  const sessionUserId = getSession();
  const supabase = supabaseBrowser();
  const router = useRouter();

  if (!sessionUserId) {
    window.location.href = "/";
  }

  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const openForm = () => {
    setIsFormOpen(true); // Open the form
  };

  const closeForm = () => {
    setIsFormOpen(false); // Close the form
  };

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
  }, [sessionUserId, supabase]);

  const handleLogout = async () => {
    destroySession();
    router.push("/login");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mb-6">Mon profil</h1>
      <div className="bg-customWhite rounded-2xl w-full max-w-2xl py-10 flex flex-col items-center justify-center gap-2">
        <Image
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
          className="bg-white rounded-full"
        />
        <div className="flex gap-4 items-center justify-center ">
          <h2 className="text-2xl">{username}</h2>
          <Pen className="size-4 cursor-pointer" onClick={openForm} />
        </div>

        <p>{email}</p>

        <Button
          onClick={handleLogout}
          className="bg-secondaryGreen text-white mt-4"
        >
          Déconnexion
        </Button>
      </div>

      {/* Form to update username */}
      {isFormOpen && (
        <EditProfile
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          closeForm={closeForm}
        />
      )}
    </div>
  );
}

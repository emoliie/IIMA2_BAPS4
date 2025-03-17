"use client";

import React from "react";
import { Button } from "./ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function ChatHeader({ user }: { user: User | undefined }) {
  const router = useRouter();

  const handleLoginWithGoogle = async () => {
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    const {error} = await supabase.auth.signOut();
    router.refresh();

    if (error) {
      console.error("Logout Error", error.message)
    }
  };

  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between h-full">
        <div>
          <h1 className="text-xl font-bold">Chat</h1>
        </div>

        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={handleLoginWithGoogle}>Login</Button>
        )}
      </div>
    </div>
  );
}

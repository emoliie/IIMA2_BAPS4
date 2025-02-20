"use client";

import React from "react";
import { Button } from "./ui/button";
import { supabaseClient } from "@/lib/supabase/client";

export default function ChatHeader() {
  const handleLoginWithGoogle = () => {
    const supabase = supabaseClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Daily Chat</h1>
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
            <h1 className="text-sm text-gray-400">2 onlines</h1>
          </div>
        </div>
        <Button onClick={handleLoginWithGoogle}>Login</Button>
      </div>
    </div>
  );
}

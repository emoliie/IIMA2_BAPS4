"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CreateChatroom({
  user,
  users,
}: {
  user: User;
  users: User[];
}) {
  const router = useRouter();
  useEffect(() => {
    function fetchUsers() {
      if (!user) {
        return router.push("/");
      }

      console.log(users);
    }
    fetchUsers();
  }, []);

  const handleCreateChatroom = async (e: React.FormEvent) => {
    const form = e.target;
    const formData = new FormData(form);
    const recipientId = formData.get("recipient");

    console.log(formData.get("recipient"));

    e.preventDefault();
    if (!recipientId) {
      return;
    }

    const supabase = supabaseBrowser();

    const { data, error } = await supabase.from("chatrooms").insert({
      recipient1: user.id,
      recipient2: recipientId,
    });

    if (error) {
      console.error("Error creating chatroom:", error.message);
    } else {
      router.push("/chat");
    }
  };

  return (
    <form onSubmit={handleCreateChatroom}>
      <label>Destinataire</label>
      <select name="recipient">
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.display_name}
          </option>
        ))}
      </select>
      <button>Créer</button>
    </form>
  );
}

"use client";

import { useSession } from "@/lib/hooks/useSession";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CreateChatroom() {
  const router = useRouter();
  const { getSession } = useSession();
  const sessionUserId = getSession();
  const supabase = supabaseBrowser();
  
  const [users, setUsers] = useState<{ id: string; display_name: string }[]>(
    []
  );

  // Vérification de la connexion
  useEffect(() => {
    if (!sessionUserId) {
      console.log("Pas connecté, redirection...");
      router.push("/");
    }
  }, [sessionUserId, router]);

  useEffect(() => {
    async function fetchUsers() {
      if (!sessionUserId) return;

      try {
        const { data: users, error } = await supabase
          .from("users")
          .select("id, display_name")
          .neq("id", sessionUserId);

        if (error) {
          console.error(
            "Erreur lors de la récupération des utilisateurs:",
            error
          );
        } else {
          setUsers(users || []);
        }
      } catch (error) {
        console.error("Erreur inattendue:", error);
      }
    }

    fetchUsers();
  }, [sessionUserId, supabase]);

  const handleCreateChatroom = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const recipientId = formData.get("recipient");

    console.log(formData.get("recipient"));

    if (!recipientId) {
      console.warn("Aucun destinataire sélectionné");
      return;
    }

    try {
      const { data, error } = await supabase.from("chatrooms").insert([
        {
          recipient1: sessionUserId as string,
          recipient2: recipientId as string,
        },
      ]);

      if (error) {
        console.error(
          "Erreur lors de la création de la chatroom:",
          error.message
        );
      } else {
        console.log("Chatroom créée avec succès:", data);
        // router.push("/chat");
      }
    } catch (error) {
      console.error("Erreur inattendue lors de la création:", error);
    }
  };

  return (
    <form onSubmit={handleCreateChatroom}>
      <label>Destinataire</label>
      <select name="recipient">
        {users.length > 0 ? (
          users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.display_name}
            </option>
          ))
        ) : (
          <option disabled>Aucun utilisateur disponible</option>
        )}
      </select>
      <button type="submit">Créer</button>
    </form>
  );
}

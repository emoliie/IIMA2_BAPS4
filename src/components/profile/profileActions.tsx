"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useSession } from "@/lib/hooks/useSession";
import { toast } from "sonner";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export function EditProfile({
  username,
  setUsername,
  email,
  setEmail,
  closeForm,
}: {
  username: string | undefined;
  setUsername: React.Dispatch<React.SetStateAction<string | undefined>>;
  email: string | undefined;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  closeForm: () => void;
}) {
  const supabase = supabaseBrowser();
  const { getSession, destroySession } = useSession();
  const sessionUserId = getSession();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Update user information in the database
    const { error } = await supabase
      .from("users")
      .update({ display_name: username, email: email })
      .eq("id", sessionUserId || "");

    if (!error) {
      toast.success("Profil modifié avec succès !");
      closeForm(); // Close the form after successful update
    }
  };
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="w-1/3 relative bg-white p-6 rounded-lg shadow-lg">
        <button
          type="button"
          onClick={closeForm}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 "
        >
          <X />
        </button>
        <h2 className="text-xl mb-4">Modifier le profil</h2>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4"
          />
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <div className="flex flex-row-reverse">
            <Button
              type="submit"
              className="bg-primaryBlue text-white hover:bg-blue-700"
            >
              Enregistrer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function DeleteProfile({ closeDialog }: { closeDialog: () => void }) {
  const supabase = supabaseBrowser();
  const { getSession, destroySession } = useSession();

  const router = useRouter();

  const handleDeleteUser = async () => {
    console.log("deleting");
    try {
      const sessionUserId = getSession();
      if (!sessionUserId) {
        toast.error("Utilisateur non connecté.");
        return;
      }
      // Delete user in the database
      const { error } = await supabase
        .from("users")
        .delete()
        .eq("id", sessionUserId || "");

      if (error) {
        console.error("Error deleting user:", error);
        toast.error(
          "Une erreur s'est produite lors de la suppression du profil."
        );
        return;
      }

      toast.success("Profil supprimé avec succès !");

      // Destroy session and redirect
      destroySession();
      router.push("/login");
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Une erreur inattendue s'est produite.");
    } finally {
      closeDialog();
    }
  };
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="w-1/3 relative bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Êtes-vous sûr de votre choix ?</h2>
        <div className="flex flex-row-reverse gap-4">
          <Button
            onClick={handleDeleteUser}
            className="bg-red-500 text-white hover:bg-red-400"
          >
            Oui
          </Button>

          <Button
            onClick={closeDialog}
            className="bg-transparent border-2 border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white"
          >
            Non
          </Button>
        </div>
      </div>
    </div>
  );
}

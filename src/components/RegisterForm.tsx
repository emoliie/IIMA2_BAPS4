"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";
import bcrypt from "bcryptjs";
import Link from "next/link";
import { useSession } from "@/lib/hooks/useSession";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { createSession } = useSession();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password) {
      toast.error("Tous les champs sont requis !");
    }

    const supabase = supabaseBrowser();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérer l'utilisateur dans la base de données
    try {
      const { data, error } = await supabase
        .from("users")
        .insert({
          display_name: name,
          email,
          password: hashedPassword,
        })
        .select("*")
        .single();

      console.log("data", data);

      if (error) {
        toast.error("Cet e-mail existe déjà !");
        console.error("Erreur d'insertion dans la base de données:", error);
      } else {
        toast.success("Connexion réussie !");

        createSession(data.id);

        window.location.href = "/";
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 my-40">
      <h1 className="text-3xl text-center mb-6">Inscrivez-vous</h1>
      <div className="flex flex-col justify-center items-center w-full max-w-2xl bg-customWhite rounded-2xl py-10">
        {/* Formulaire d'inscription */}
        <form
          onSubmit={handleRegister}
          className="w-full px-20 md:px-40 flex flex-col justify-center items-center gap-3"
        >
          <label className="w-full">Pseudo</label>
          <Input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-full"
            required
          />
          <label className="w-full">E-mail</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-full"
            required
          />
          <label className="w-full">Mot de passe</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-full"
            required
          />
          <Button
            type="submit"
            className="mt-4 bg-secondaryGreen text-black p-2 hover:border-2 hover:border-secondaryGreen hover:text-secondaryGreen"
            disabled={loading}
          >
            {loading ? "Inscription..." : "S'inscrire"}
          </Button>
        </form>
        <span className="my-8 border-t border-gray-600/50 w-2/3" />
        <p>
          Déjà un compte ?&nbsp;
          <Link href="/login" className="text-secondaryGreen">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}

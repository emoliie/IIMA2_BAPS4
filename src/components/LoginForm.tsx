"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabaseBrowser } from "@/lib/supabase/browser";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import bcrypt from "bcryptjs";
import { useSession } from "@/lib/hooks/useSession";
import { useUserStore } from "@/lib/store/user";
import { useUser } from "@/lib/hooks/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createSession, getSession } = useSession();
  const [loading, setLoading] = useState(false);
  const { createUser } = useUser();

  const isLoggedIn = () => {
    return getSession();
  };

  useEffect(() => {
    if (isLoggedIn()) {
      window.location.href = "/";
    } else {
      console.log("Aucun utilisateur trouvé");
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const supabase = supabaseBrowser();

    try {
      const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

      console.log(user);

      if (error || !user) {
        toast.error("Email ou mot de passe incorrect");
        return;
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        toast.error("Mot de passe incorrect");
        return;
      }

      createSession(user.id);

      console.log("user: ", user);
      createUser(user);

      toast.success("Connexion réussie !");
      window.location.href = "/";
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      toast.error("Une erreur est survenue lors de la connexion.");
    }

    setLoading(false);
  };

  // const handleLoginWithGoogle = async () => {
  //   const supabase = supabaseBrowser();
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       redirectTo: `${window.location.origin}/auth/callback`,
  //     },
  //   });
  //   if (error) {
  //     toast.error("Une erreur est survenue lors de la connexion avec Google.");
  //   }
  // };

  return (
    <div className="flex flex-col justify-center items-center px-4 my-40">
      <h1 className="text-3xl text-center mb-6">Connexion</h1>
      <div className="flex flex-col justify-center items-center w-full max-w-2xl bg-customWhite rounded-2xl py-10">
        {/* Formulaire de connexion */}
        <form
          onSubmit={handleLogin}
          className="w-full px-40 flex flex-col justify-center items-center gap-3"
        >
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
            {loading ? "Connexion..." : "Se connecter"}
          </Button>
        </form>

        {/* <p className="text-gray-600 text-sm mt-4">Ou</p> */}

        {/* Bouton Google
        <Button
          onClick={handleLoginWithGoogle}
          className="bg-white text-black mt-2"
        >
          <Image
            src="/google-icon.svg"
            alt="Icône Google"
            width={20}
            height={20}
          />
          <span>Se connecter avec Google</span>
        </Button> */}
        <span className="my-8 border-t border-gray-600/50 w-2/3" />

        <p>
          Pas de compte ?&nbsp;
          <Link href="/register" className="text-secondaryGreen">
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}

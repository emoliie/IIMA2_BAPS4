"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabaseBrowser } from "@/lib/supabase/browser";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Tous les champs sont requis !");
    }

    setLoading(true);

    const supabase = supabaseBrowser();
    const { data, error } = await supabase.from("users").insert({
      display_name: name,
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Connexion réussie !");
      console.log(name, email, password);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 my-40">
      <h1 className="text-3xl text-center mb-6">Inscription</h1>
      <div className="flex flex-col justify-center items-center w-full max-w-2xl bg-customWhite rounded-2xl py-10">
        {/* Formulaire d'inscription */}
        <form
          onSubmit={handleRegister}
          className="w-full px-40 flex flex-col justify-center items-center gap-3"
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
            className="bg-blue-600 text-white p-2"
            disabled={loading}
          >
            {loading ? "Inscription..." : "S'inscrire"}
          </Button>
        </form>
      </div>
    </div>
  );
}

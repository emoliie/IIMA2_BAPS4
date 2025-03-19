import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function RegisterForm() {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl text-center mb-6">
        Connectez-vous ou créez-vous un compte
      </h1>
      <div className="flex flex-col justify-center items-center w-full max-w-2xl bg-customWhite rounded-2xl py-10">
        {errorMessage && (
          <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
        )}

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
          <Button type="submit" className="bg-blue-600 text-white p-2">
            Se connecter
          </Button>
        </form>

        <p className="text-gray-600 text-sm mt-4">Ou</p>

        {/* Bouton Google */}
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
        </Button>
        <hr className="my-2" />
        <Link href="/register">
          <Button className="bg-white text-black">Créer un compte</Button>
        </Link>
      </div>
    </div>
  );
}

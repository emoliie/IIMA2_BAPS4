import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-8 bg-primaryBlue px-20 py-10 lg:px-20 lg:py-10 relative z-1">
      <Image
        src="/logo-footer.png"
        alt="Logo Ville Impériale"
        width={50}
        height={50}
      />
      <ul className="flex flex-wrap text-white gap-4">
        <Link href="/legal-notices">Mentions Légales</Link>
        <Link href="#">Politique de confidentialité</Link>
        <Link href="#">Numéro d'urgence</Link>
        <Link href="#">Plan du site</Link>
        <Link href="#">Nous contacter</Link>
      </ul>
    </footer>
  );
}

import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <header className="w-screen flex pt-20 px-80 items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-5 pb-8">
        <h1 className="text-5xl font-semibold text-left text-primaryBlue tracking-wide leading-relaxed">
          Vous aussi, agissez <br /> contre le gaspillage !
        </h1>
        <Image
          src="/vector1.svg"
          alt=""
          width={50}
          height={50}
          aria-label="hidden"
          className="min-w-full"
        />
      </div>
      <Image
        src="/header.png"
        alt="Panier de courses"
        width={500}
        height={500}
        aria-label="hidden"
        className="lg:w-100"
      />
    </header>
  );
}

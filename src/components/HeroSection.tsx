import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <header className="w-screen flex pt-10 px-20 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 w-1/3 pb-8">
        <h1 className="text-5xl font-semibold text-left text-[#003BAA] tracking-wide leading-relaxed">
          Vous aussi, agissez <br /> contre le gaspillage !
        </h1>
        <Image
          src="/vector1.svg"
          alt=""
          width={50}
          height={50}
          aria-label="hidden"
          className="lg:w-full"
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

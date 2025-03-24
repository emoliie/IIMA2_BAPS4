import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <header className="w-screen flex flex-col items-center justify-between pt-10 px:20 lg:pt-20 lg:px-80 lg:flex-row">
      <div className="flex flex-col items-center justify-center gap-5 pb-8">
        <h1 className="text-4xl lg:text-5xl font-semibold text-left text-primaryBlue tracking-wide leading-relaxed">
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
        className="w-52 lg:w-3/6"
      />
    </header>
  );
}

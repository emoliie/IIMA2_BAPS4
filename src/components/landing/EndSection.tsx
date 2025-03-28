"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CircleArrowUp } from "lucide-react";

export default function EndSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <section className="flex flex-col items-center justify-center py-20 lg:py-20 relative">
      <div className="lg:max-w-5xl m-auto">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-4xl lg:text-5xl text-primaryBlue font-semibold">
            À votre tour !
          </p>
          <Image
            src="/vector1.svg"
            alt=""
            width={50}
            height={50}
            aria-label="hidden"
            className="min-w-full"
          />
        </div>
        <div className="flex justify-center gap-5 mt-8">
          <Button className="bg-primaryBlue p-6 hover:bg-blue-700">
            Donner
          </Button>
          <Button className="bg-primaryBlue p-6 hover:bg-blue-700">
            Voir les produits
          </Button>
        </div>
      </div>
      <Image
        src="/fraises.png"
        alt=""
        aria-label="hidden"
        width={500}
        height={500}
        className="absolute -bottom-20 lg:-bottom-32 left-0 size-60 lg:size-[400px]"
      />
      <Image
        src="/gateaux.png"
        alt=""
        aria-label="hidden"
        width={500}
        height={500}
        className="absolute -bottom-20 lg:-bottom-32 right-0 size-52 lg:size-96"
      />

      <CircleArrowUp
        className="absolute bottom-10 right-10 text-white size-16 lg:size-20 cursor-pointer"
        onClick={scrollToTop}
      />
    </section>
  );
}

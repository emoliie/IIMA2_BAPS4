import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function EndSection() {
  return (
    <section className="flex flex-col items-center justify-center p-20 lg:py-20 lg:px-80 gap-8 relative">
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
      <div className="flex justify-center gap-5">
        <Button className="bg-primaryBlue p-6 hover:bg-blue-600">Donner</Button>
        <Button className="bg-primaryBlue p-6 hover:bg-blue-600">
          Voir les produits
        </Button>
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
    </section>
  );
}

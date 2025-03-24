import Image from "next/image";
import React from "react";

export default function ApproachSection() {
  return (
    <section className="py-10 px-20 lg:py-20 lg:px-80 flex flex-col lg:flex-row justify-between gap-10">
      <div className="lg:w-1/2 flex flex-col gap-10">
        <h2 className="text-3xl lg:text-4xl font-semibold text-primaryBlue">
          Notre démarche
        </h2>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Image
        src="/marché.png"
        alt="Photo de marché"
        height={600}
        width={600}
        className="rounded-xl lg:w-1/2"
      />
    </section>
  );
}

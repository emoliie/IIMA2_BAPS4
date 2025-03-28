import Image from "next/image";
import React from "react";

export default function ApproachSection() {
  return (
    <section className="py-10 px-20 lg:py-20 lg:max-w-7xl m-auto flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="lg:w-1/2 flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-semibold text-primaryBlue ">
          Notre démarche
        </h2>
        <p className="leading-relaxed">
          À l’initiative de la Mairie de Rueil-Malmaison, nous avons créé une
          plateforme solidaire pour lutter contre le gaspillage alimentaire. Ce
          projet permet aux habitants de donner, échanger et récupérer des
          aliments encore consommables, évitant ainsi le gaspillage tout en
          favorisant l’entraide locale.
        </p>
        <p className="text-lg font-semibold">
          Rejoignez-nous pour une consommation plus responsable, solidaire et
          durable !
        </p>
      </div>
      <Image
        src="/photo-maire.png"
        alt="Photo du Maire de Rueil Malmaison"
        height={1000}
        width={1000}
        className="rounded-xl lg:w-1/2 lg:h-full"
      />
    </section>
  );
}

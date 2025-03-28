import Image from "next/image";
import React from "react";

export default function UseSection() {
  return (
    <section className="bg-primaryBlue py-10 px-20 lg:py-20 ">
      <div className="lg:max-w-5xl m-auto flex flex-col items-center justify-center gap-10">
        <h2 className="text-secondaryGreen text-center text-3xl lg:text-4xl font-semibold">
          Comment ça fonctionne ?
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="lg:w-1/3">
            <h3 className="text-white text-2xl lg:text-3xl text-center">
              Donner
            </h3>
            <div className="flex py-8 lg:px-8 gap-10">
              <div className="flex flex-col gap-2">
                <h4 className="text-secondaryGreen text-2xl lg:text-3xl font-semibold">
                  Étape 1
                </h4>
                <p className="text-white">
                  Je <span className="text-secondaryGreen">recherche</span> le
                  produit que je souhaite réserver dans la
                  <span className="text-secondaryGreen">
                    {" "}
                    barre de recherche
                  </span>
                  .
                </p>
              </div>
              <Image
                src="/button-right.svg"
                alt="Bouton droit"
                width={50}
                height={50}
              />
            </div>
          </div>

          <span className="border-2 rounded-full"></span>

          <div className="lg:w-1/3">
            <h3 className="text-white text-2xl lg:text-3xl text-center">
              Récupérer
            </h3>
            <div className="flex py-8 lg:px-8 gap-10">
              <div className="flex flex-col gap-2">
                <h4 className="text-secondaryGreen text-2xl lg:text-3xl font-semibold">
                  Étape 1
                </h4>
                <p className="text-white">
                  Je <span className="text-secondaryGreen">recherche</span> le
                  produit que je souhaite réserver dans la
                  <span className="text-secondaryGreen">
                    {" "}
                    barre de recherche
                  </span>
                  .
                </p>
              </div>
              <Image
                src="/button-right.svg"
                alt="Bouton droit"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

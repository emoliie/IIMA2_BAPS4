import React from "react";

export default function UseSection() {
  return (
    <section className="bg-[#003BAA] p-20 flex flex-col items-center justify-center">
      <h2 className="text-[#32F188] text-3xl font-semibold">
        Comment ça fonctionne ?
      </h2>
      <div className="flex gap-8">
        <div>
          <h3 className="text-white text-2xl text-center">Donner</h3>
          <div className="p-12">
            <div className="flex flex-col">
              <h4 className="text-[#32F188] text-2xl">Étape 1</h4>
              <p className="text-white">
                Je recherche le produit que je souhaite réserver dans la barre
                de recherche.
              </p>
            </div>
            {/* <Image src="/button.png" alt="" arialabel="hidden" /> */}
          </div>
        </div>

        <span className="border-2 rounded-full"></span>
        <div>
          <h3 className="text-white text-2xl text-center">Récupérer</h3>
          <div className="p-12">
            <h4 className="text-[#32F188] text-2xl">Étape 1</h4>
            <p className="text-white">
              Je recherche le produit que je souhaite réserver dans la barre de
              recherche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

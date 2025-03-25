"use client";

import { useSession } from "@/lib/hooks/useSession";
import { supabaseBrowser } from "@/lib/supabase/browser";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";

const CreateProduct = () => {
  const supabase = supabaseBrowser();
  const { getSession } = useSession();
  const sessionUserId = getSession();

  const [product, setProduct] = useState({
    name: "",
    photo: "",
    userid: sessionUserId,
    place: "",
    expiration: "",
    description: "",
    urgent: false,
    usertaker: null,
    reserved: false,
    category: "fruits",
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCreateProduct = async (e: any) => {
    e.preventDefault();
    console.log("produit :", product);
    const { data, error } = await supabase.from("produits").insert([product]);
    if (error) {
      console.error("error", error);
    } else {
      console.log("data", data);
      toast.success("Produit créé avec succès !");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Generate a preview URL for the selected image
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl); // Update the preview image state

      // Upload the image to Supabase storage
      const { data, error } = await supabase.storage
        .from("imagesproduits")
        .upload(`imagesproduits/${file.name}`, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) {
        console.error("errorimg", error);
      } else {
        const photoUrl = supabase.storage
          .from("imagesproduits")
          .getPublicUrl(`imagesproduits/${file.name}`).data.publicUrl;
        setProduct((prevProduct) => ({
          ...prevProduct,
          photo: photoUrl,
        }));
      }
    }
  };

  return (
    <form
      onSubmit={handleCreateProduct}
      className="w-full flex flex-col items-center pb-60"
    >
      <div className="bg-[#003BAA] w-full flex flex-col items-center p-5 relative">
        <h1 className={`text-4xl text-white mb-8 mt-2`}>Nouveau Don</h1>
        <div className="flex justify-between w-3/4 h-96 bg-[#E6F3FF] rounded-xl mb-10">
          <div className="flex flex-col justify-center w-5/12 pl-14 pr-14">
            <label htmlFor="name">Nom du produit :</label>
            <input
              type="text"
              name="name"
              className="mb-5 p-2 rounded-full"
              value={product.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="category">Catégorie :</label>
            <select
              name="category"
              className="mb-5 p-2 rounded-full"
              onChange={handleSelectChange}
            >
              <option value="fruits">Fruits</option>
              <option value="vegetables">Légumes</option>
              <option value="meat">Viande</option>
              <option value="fish">Poisson</option>
              <option value="dairy">Produits laitiers</option>
              <option value="starchy">Féculents</option>
              <option value="other">Autres</option>
            </select>
            <label htmlFor="date">Date d'expiration :</label>
            <input
              type="date"
              name="expiration"
              className="mb-5 p-2 rounded-full"
              value={product.expiration}
              onChange={handleChange}
              required
            />
            <label htmlFor="description">Description :</label>
            <textarea
              name="description"
              className="p-2 rounded-2xl "
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-7/12 pl-14 pr-14">
            <Input
              type="file"
              name="photo"
              id="file"
              className="hidden p-2 rounded-full"
              onChange={handleFileChange}
              required
            />

            <label
              htmlFor="file"
              className="w-full h-3/4 bg-[#DEDEDE] flex items-center justify-center cursor-pointer rounded-xl"
            >
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Image du produit"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <Image
                  src="appareilphoto.svg"
                  className="w-16 h-16"
                  alt="Upload"
                  width={50}
                  height={50}
                />
              )}
            </label>
          </div>
        </div>

        <Image
          src="/fun.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-10 left-24"
        />
        <Image
          src="/fun.svg"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-10 right-24 rotate-180"
        />
      </div>

      <button type="submit" className="p-2 px-10 bg-[#32F188] rounded-lg mt-10">
        Valider
      </button>
    </form>
  );
};

export default CreateProduct;

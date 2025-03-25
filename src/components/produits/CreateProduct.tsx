"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { useState, useEffect } from "react";
import { poppins400 } from "../../../public/fonts/fonts";

const CreateProduct = () => {
    const supabase = supabaseBrowser();
    const [product, setProduct] = useState({
        name: "",
        photo: "",
        userid: "b435fb89-07ab-456d-bbf1-f2f075088a31",
        place: "",
        expiration: "",
        description: "",
        urgent: false,
        usertaker: null,
        reserved: false,
        category: "fruts",
    });

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type} = e.target;
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
        console.log("prod" , product);
        const { data, error } = await supabase.from("produits").insert([product]);
        if (error) {
        console.error("error", error);
        } else {
        console.log("data", data);
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const { data, error } = await supabase.storage
                .from('imagesproduits')
                .upload(`imagesproduits/${file.name}`, file);

            if (error) {
                console.error("errorimg", error);
            } else {
                const photoUrl = supabase.storage.from('imagesproduits').getPublicUrl(`imagesproduits/${file.name}`).data.publicUrl;
                setProduct((prevProduct) => ({
                    ...prevProduct,
                    photo: photoUrl,
                }));
            }
        }
    };

    return (
        <div className={`${poppins400}`}>
            <form onSubmit={handleCreateProduct} className="w-full flex flex-col items-center">
                <div className="bg-[#003BAA] w-full flex flex-col items-center p-5">
                    <h1 className={`text-2xl text-white mb-8 mt-2`}>Nouveau Don</h1>
                    <div className="flex justify-between w-3/4 h-96 bg-[#E6F3FF] rounded-xl mb-10">
                        <div className="flex flex-col justify-center w-5/12 pl-14 pr-14">
                            <label htmlFor="name">Nom du produit :</label>
                            <input type="text" name="name" className="mb-5 p-1 rounded-lg" value={product.name} onChange={handleChange} required />
                            <label htmlFor="category">Catégorie :</label>
                            <select name="category" className="mb-5 p-1 rounded-lg" onChange={handleSelectChange}>
                                <option value="fruts">Fruits</option>
                                <option value="vegetables">Légumes</option>
                                <option value="meat">Viande</option>
                                <option value="fish">Poisson</option>
                                <option value="dairy">Produits laitiers</option>
                                <option value="starchy">Féculents</option>
                                <option value="other">Autres</option>
                            </select>
                            <label htmlFor="date">Date d'expiration :</label>
                            <input type="date" name="expiration" className="mb-5 p-1 rounded-lg" value={product.expiration} onChange={handleChange} required />
                            <label htmlFor="description">Description :</label>
                            <textarea name="description" className="p-1 rounded-lg" value={product.description} onChange={handleChange} required />
                        </div>
                        <div className="flex flex-col justify-center items-center w-7/12 pl-14 pr-14">
                            <input type="file" name="photo" id="file" className="hidden" onChange={handleFileChange} required />
                            <label htmlFor="file" className="w-full h-3/4 bg-[#DEDEDE] flex items-center justify-center cursor-pointer rounded-xl">
                                <img src="appareilphoto.svg" className="w-16 h-16" alt="Upload" />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
                <button type="submit" className="p-2 px-10 bg-[#32F188] rounded-lg mt-10">Valider</button>
            </form>
        </div>
    );
};

export default CreateProduct;
"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { useState, useEffect } from "react";

const CreateProduct = () => {
    const supabase = supabaseBrowser();
    const [product, setProduct] = useState({
        name: "",
        photo: "",
        userid: "4b7cdb30-c6ce-4187-b4c8-075a049eccd5",
        place: "",
        expiration: "",
        description: "",
        urgent: false,
        usertaker: "b135f4f9-29de-4c24-9a1d-9221397af508",
        reserved: false,
        category: "",
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduct((prevProduct) => ({
                    ...prevProduct,
                    photo: file.name,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h1>Nouveau Don</h1>
            <form onSubmit={handleCreateProduct} >
                <div>
                    <div>
                        <input type="text" name="name" placeholder="Nom" value={product.name} onChange={handleChange} required />
                        <select name="category" onChange={handleSelectChange}>
                            <option value="fruts">Fruits</option>
                            <option value="vegetables">Légumes</option>
                            <option value="meat">Viande</option>
                            <option value="fish">Poisson</option>
                            <option value="dairy">Produits laitiers</option>
                            <option value="starchy">Féculents</option>
                            <option value="other">Autres</option>
                        </select>
                        <input type="date" name="expiration" placeholder="Date d'expiration" value={product.expiration} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="file" name="photo" onChange={handleFileChange}  required />
                    </div>
                </div>
                <div>
                    
                </div>
            </form>
            <form>
                <input type="text" name="name" placeholder="Nom" value={product.name} onChange={handleChange} required />
                <select name="category" onChange={handleSelectChange}>
                    <option value="fruts">Fruits</option>
                    <option value="vegetables">Légumes</option>
                    <option value="meat">Viande</option>
                    <option value="fish">Poisson</option>
                    <option value="dairy">Produits laitiers</option>
                    <option value="starchy">Féculents</option>
                    <option value="other">Autres</option>
                </select>
                <input type="file" name="photo" onChange={handleFileChange}  required />
                <input type="text" name="place" placeholder="Lieu" value={product.place} onChange={handleChange} required />
                <input type="date" name="expiration" placeholder="Date d'expiration" value={product.expiration} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default CreateProduct;
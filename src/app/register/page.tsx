import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterForm";
import React from "react";

export default async function page() {
  return (
    <>
      <Navbar />
      <RegisterForm />
      <Footer />
    </>
  );
}

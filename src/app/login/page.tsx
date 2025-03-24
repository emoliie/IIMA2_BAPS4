import Navbar from "@/components/Navbar";
import React from "react";
import Login from "@/components/LoginForm";
import Footer from "@/components/Footer";

export default async function page() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}

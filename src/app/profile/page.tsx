import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserInfo from "@/components/profile/UserInfo";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <UserInfo />
      <Footer />
    </>
  );
}

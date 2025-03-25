import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choisis les graisses de police que tu veux
  variable: "--font-poppins", // Définit une variable CSS pour l'utiliser globalement
});

export const metadata: Metadata = {
  title: "Rueil Partage",
  description: "Plateforme de partage et d'anti-gaspillage alimentaire",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <html lang="fr">
      <body className={poppins.variable}>
        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}

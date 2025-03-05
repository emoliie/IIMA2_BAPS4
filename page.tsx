// "use client";

// import { useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { supabaseClient } from "@/lib/supabase/browser";

// export default function AuthCallback() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const code = searchParams.get("code");

//   useEffect(() => {
//     const handleOAuthRedirect = async () => {
//       if (!code) {
//         router.push("/auth/auth-code-error");
//         return;
//       }

//       const supabase = supabaseClient();
//       const { data, error } = await supabase.auth.getSession(); // Fonction côté client
//       console.log("data", data);

//       if (error) {
//         console.error("Erreur :", error);
//         router.push("/auth/auth-code-error");
//       } else if (data?.session) {
//         router.push("/"); // Redirection après succès
//       }
//     };

//     handleOAuthRedirect();
//   }, [router, code]);

//   return <p>Connexion en cours...</p>;
// }

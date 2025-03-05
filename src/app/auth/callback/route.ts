import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  const supabase = await supabaseServer(); // Await because it's now async
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Auth error:", error.message);
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  return NextResponse.redirect(`${origin}${next}`);
}

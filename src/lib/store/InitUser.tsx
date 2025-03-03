"use client";

import { User } from "@supabase/supabase-js";
import React, { use, useEffect, useRef } from "react";
import { useUser } from "./user";

export default function InitUser({ user }: { user: User | undefined }) {
  const initState = useRef(false);
  useEffect(() => {
    if (!initState.current) {
      useUser.setState({ user });
    }

    initState.current = true;
  }, []);
  return <></>;
}

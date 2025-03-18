"use client";

import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function UsersList({
  user,
  users,
}: {
  user: User;
  users: User[];
}) {
  const router = useRouter();
  useEffect(() => {
    function fetchUsers() {
      if (!user) {
        return router.push("/");
      }

      console.log(users);
    }
    fetchUsers();
  }, []);

  console.log("users:", users);

  return (
    <aside className="w-1/4 border-r">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-2 p-2">
          <Image
            src={user.avatar_url}
            alt={`Avatar of ${user.display_name}`}
            width={40}
            height={40}
            className="rounded-full ring-2"
          />
          <h2 className="font-bold">{user.display_name}</h2>
        </div>
      ))}
    </aside>
  );
}

import React from "react";
import Chatroom from "@/components/chat/Chatroom";

interface PageParams {
  room: string;
}

export default async function page({ params }: { params: PageParams }) {
  return (
    <>
      <Chatroom room={params.room} />
    </>
  );
}

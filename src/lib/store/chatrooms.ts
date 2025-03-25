import { create } from "zustand";

export interface ChatRoom {
  id: string;
  created_at: string;
  recipient1: { id: string; avatar_url: string; display_name: string };
  recipient2: { id: string; avatar_url: string; display_name: string };
}

export interface ChatRoomState {
  chatRooms: ChatRoom[];
  addChatRoom: (chatRoom: ChatRoom) => void;
}

export const useChatRoom = create<ChatRoomState>(() => ({
  chatRooms: [],
  addChatRoom: (chatRoom: ChatRoom) => {},
}));

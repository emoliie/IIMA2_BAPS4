import { create } from "zustand";

export type Imessage = {
  created_at: string;
  id: string;
  is_edit: boolean;
  send_by: string;
  text: string;
  users: {
    avatar_url: string;
    created_at: string;
    display_name: string;
    id: string;
  } | null;
};

// export type Iuser = {
//   avatar_url: string;
//   created_at: string;
//   display_name: string;
//   id: string;
// };

interface MessageState {
  messages: Imessage[];
  addMessage: (message: Imessage) => void;
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));

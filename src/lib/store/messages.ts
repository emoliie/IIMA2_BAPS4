import { create } from "zustand";
import { User } from "./user";

export type Imessage = {
  created_at: string;
  id: string;
  is_edit: boolean;
  send_by: string;
  text: string;
  user: User;
};

interface MessageState {
  messages: Imessage[];
  actionMessage: Imessage | undefined;
  optimisticIds: string[];
  addMessage: (message: Imessage) => void;
  setActionMessage: (message: Imessage | undefined) => void;
  optimisticDeleteMessage: (messageId: string) => void;
  optimisticUpdateMessage: (message: Imessage) => void;
  setOptimisticIds: (id: string) => void;
  clearMessages: () => void;
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
  actionMessage: undefined,
  optimisticIds: [],
  setOptimisticIds: (id: string) =>
    set((state) => ({ optimisticIds: [...state.optimisticIds, id] })),
  addMessage: (newMessage) =>
    set((state) => {
      if (!state) {
        return { messages: [newMessage] };
      }
      const messageFound = state.messages.find(
        (message) => message.id === newMessage.id
      );
      if (messageFound) {
        return { messages: state.messages };
      }

      return {
        messages: [newMessage, ...state.messages],
      };
    }),
  setActionMessage: (message) => set(() => ({ actionMessage: message })),
  optimisticDeleteMessage: (messageId) =>
    set((state) => {
      return {
        messages: state.messages.filter((message) => message.id !== messageId),
      };
    }),
  optimisticUpdateMessage: (updateMessage) =>
    set((state) => {
      return {
        messages: state.messages.filter((message) => {
          if (message.id === updateMessage.id) {
            (message.text = updateMessage.text),
              (message.is_edit = updateMessage.is_edit);
          }
          return message;
        }),
      };
    }),
  clearMessages: () => set({ messages: [] }),
}));

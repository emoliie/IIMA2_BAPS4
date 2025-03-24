import { create } from "zustand";

export interface User {
  id: string;
  email: string;
  display_name: string;
  created_at: string;
  password?: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}


export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user: User) => {
    set({ user });
  },
}));
import { supabaseBrowser } from "../supabase/browser";
import { User } from "../store/user";

export const useUser = () => {
  return {
    createUser: (user: User) => {
      localStorage.setItem("user", JSON.stringify(user));
    },
    getUser: () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user) as User;
      }
      return null;
    },
    destroyUser: () => {
      localStorage.removeItem("user");
    },
  };
};

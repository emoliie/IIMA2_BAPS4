export const useSession = () => {
  return {
    createSession: (userId: string) => {
      localStorage.setItem("sessionUserId", userId);
    },
    getSession: () => {
      return localStorage.getItem("sessionUserId");
    },
    destroySession: () => {
      localStorage.removeItem("sessionUserId");
    },
  };
};

export const useSession = () => {
  return {
    createSession: (userId: string) => {
      // ce n'etait pas window.localStorage
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

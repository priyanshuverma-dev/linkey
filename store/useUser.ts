import { useSession } from "next-auth/react";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  getUser: () => {
    const { data } = useSession();
    set(() => ({ user: data }));
  },
  removeUser: () => set((state: any) => (state = null)),
}));

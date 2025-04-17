import { User } from "@/interface/user";
import api from "@/service/axios";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: async () => {
    try {
      await api.post("/logout");
      set({ user: null });
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  },
}));

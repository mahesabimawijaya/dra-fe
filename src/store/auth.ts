import { User } from "@/interface/user";
import api from "@/service/axios";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setUser: (user: User) => void;
  logout: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  loading: true,
  setLoading: (loading) => set({ loading }),
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

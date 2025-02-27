import { create } from "zustand";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { User } from "../models/user/user";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  signOut: async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // await auth().signOut();
      set({ user: null });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  },
}));

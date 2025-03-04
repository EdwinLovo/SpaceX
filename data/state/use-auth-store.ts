import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { User } from "../models/user/user";
import { auth } from "@/firebaseConfig";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      signOut: async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          await auth.signOut();

          set({ user: null }); // Reset state
          useAuthStore.persist.clearStorage(); // Clear persisted data
        } catch (error) {
          console.error("Sign out error:", error);
        }
      },
    }),
    {
      name: "auth-storage", // Key for AsyncStorage
      storage: createJSONStorage(() => AsyncStorage), // Persist using AsyncStorage
    }
  )
);

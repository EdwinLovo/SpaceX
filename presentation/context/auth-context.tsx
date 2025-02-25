import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const isAuthenticated = !!token;

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await SecureStore.getItemAsync("jwt_token");
      if (storedToken) {
        try {
          const decoded: any = jwtDecode(storedToken);
          if (decoded.exp * 1000 > Date.now()) {
            console.log("Token is valid");
            setToken(storedToken);
          } else {
            console.log("Token expired");
            await SecureStore.deleteItemAsync("jwt_token");
          }
        } catch {
          await SecureStore.deleteItemAsync("jwt_token");
        }
      }
    };

    checkToken();
  }, []);

  const login = async (newToken: string) => {
    console.log("login", newToken);
    await SecureStore.setItemAsync("jwt_token", newToken);
    setToken(newToken);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("jwt_token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

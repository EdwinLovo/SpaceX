import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme, ThemeType } from "./theme";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
  isDarkMode: boolean;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === "dark");

  useEffect(() => {
    setIsDarkMode(systemColorScheme === "dark");
  }, [systemColorScheme]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{
        theme: isDarkMode ? DarkTheme : LightTheme,
        toggleTheme,
        isDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

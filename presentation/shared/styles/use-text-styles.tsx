import { useTheme } from "@/presentation/context/theme-context";
import { StyleSheet } from "react-native";

const useTextStyles = () => {
  const { theme } = useTheme(); // Get the current theme

  return StyleSheet.create({
    textPrimary: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: "bold",
    },
    textSecondary: {
      color: theme.textSecondary,
      fontSize: 14,
      marginTop: 4,
    },
  });
};

export default useTextStyles;

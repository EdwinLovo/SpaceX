import { StyleSheet } from "react-native";
import { useTheme } from "./theme-context";

const useStyles = () => {
  const { theme } = useTheme(); // Get the current theme

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background, // Use theme color
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.textPrimary, // Use theme color
      fontSize: 16,
    },
    button: {
      backgroundColor: theme.primary,
      padding: 12,
      borderRadius: 8,
    },
    buttonText: {
      color: theme.textSecondary,
      fontSize: 16,
      textAlign: "center",
    },
  });
};

export default useStyles;

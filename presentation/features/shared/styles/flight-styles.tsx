import { useTheme } from "@/theme/theme-context";
import { StyleSheet } from "react-native";

const useFlightStyles = () => {
  const { theme } = useTheme(); // Get the current theme

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background, // Use theme color
      padding: 16,
    },
    upcomingFlightCardContainer: {
      backgroundColor: theme.surface,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    pastFlightCardContainer: {
      backgroundColor: theme.surface,
      padding: 16,
      margin: 8,
      borderRadius: 12,
      flex: 1, // Ensure cards take equal width
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    roundedContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.primary,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    missionPatchImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    flightInfoContainer: {
      flex: 1,
      justifyContent: "center",
    },
  });
};

export default useFlightStyles;

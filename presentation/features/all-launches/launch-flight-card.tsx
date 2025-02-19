import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useTextStyles from "@/presentation/shared/styles/use-text-styles";
import { Launch } from "@/data/models/response/launches/launch";
import { useTheme } from "@/context/theme-context";

interface LaunchFlightCardProps {
  launch: Launch;
  onPress?: () => void;
}

const LaunchFlightCard = ({ launch, onPress }: LaunchFlightCardProps) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.upcomingFlightCardContainer}
    >
      <View style={styles.roundedContainer}>
        <Text style={textStyles.textPrimary}>🚀</Text>
      </View>

      <View style={styles.flightInfoContainer}>
        <Text style={textStyles.textPrimary}>
          Flight #{launch.flight_number}
        </Text>
        <Text style={textStyles.textSecondary}>{launch.mission_name}</Text>
        <Text style={textStyles.textSecondary}>
          {launch.rocket.rocket_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LaunchFlightCard;

const useStyles = () => {
  const { theme } = useTheme(); // Get the current theme

  return StyleSheet.create({
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
    roundedContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.primary,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    flightInfoContainer: {
      flex: 1,
      justifyContent: "center",
    },
  });
};

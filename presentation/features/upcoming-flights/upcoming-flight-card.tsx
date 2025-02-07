import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/theme/theme-context";
import useFlightStyles from "../shared/styles/flight-styles";
import useTextStyles from "@/presentation/shared/text-styles";

interface FlightCardProps {
  flightNumber: string;
  date: string;
  rocketName: string;
  missionPatch?: string;
  onPress?: () => void;
}

const UpcomingFlightCard = ({
  flightNumber,
  date,
  rocketName,
  missionPatch,
  onPress,
}: FlightCardProps) => {
  const { theme } = useTheme();
  const styles = useFlightStyles();
  const textStyles = useTextStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.upcomingFlightCardContainer}
    >
      <View style={styles.roundedContainer}>
        {missionPatch ? (
          <Image
            source={{ uri: missionPatch }}
            style={styles.missionPatchImage}
          />
        ) : (
          <Text style={textStyles.textPrimary}>🚀</Text>
        )}
      </View>

      <View style={styles.flightInfoContainer}>
        <Text style={textStyles.textPrimary}>Flight #{flightNumber}</Text>
        <Text style={textStyles.textSecondary}>{date}</Text>
        <Text style={textStyles.textSecondary}>{rocketName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingFlightCard;

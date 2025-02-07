import useTextStyles from "@/presentation/shared/text-styles";
import useFlightStyles from "../shared/styles/flight-styles";
import { Text, TouchableOpacity, View } from "react-native";

interface FlightCardProps {
  flightNumber: string;
  date: string;
  rocketName: string;
  missionPatch?: string;
  onPress?: () => void;
}

const PastFlightCard = ({
  flightNumber,
  date,
  rocketName,
  missionPatch,
  onPress,
}: FlightCardProps) => {
  const styles = useFlightStyles();
  const textStyles = useTextStyles();

  return (
    <TouchableOpacity onPress={onPress} style={styles.pastFlightCardContainer}>
      <View style={styles.flightInfoContainer}>
        <Text style={textStyles.textPrimary}>Flight #{flightNumber}</Text>
        <Text style={textStyles.textSecondary}>{date}</Text>
        <Text style={textStyles.textSecondary}>{rocketName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PastFlightCard;

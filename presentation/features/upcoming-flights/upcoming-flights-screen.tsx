import { View, FlatList } from "react-native";
import UpcomingFlightCard from "./upcoming-flight-card";
import useFlightStyles from "../shared/styles/flight-styles";

export const mockFlights = [
  {
    flightNumber: "Flight #42",
    date: "2025-03-15",
    rocketName: "Falcon 9",
    missionPatch: "https://example.com/mission_patch.png", // Replace with actual image URL
  },
  {
    flightNumber: "Flight #88",
    date: "2025-04-21",
    rocketName: "Starship",
  },
  {
    flightNumber: "Flight #120",
    date: "2025-06-10",
    rocketName: "Falcon Heavy",
    missionPatch: "https://example.com/mission_patch2.png",
  },
];

const UpcomingFlightsScreen = () => {
  const styles = useFlightStyles();

  return (
    <View style={styles.container}>
      <FlatList
        data={mockFlights}
        keyExtractor={(item) => item.flightNumber}
        renderItem={({ item }) => (
          <UpcomingFlightCard
            {...item}
            onPress={() => alert(`Details for ${item.flightNumber}`)}
          />
        )}
      />
    </View>
  );
};

export default UpcomingFlightsScreen;

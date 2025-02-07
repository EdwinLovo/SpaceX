import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useTheme } from "@/theme/theme-context";
import PastFlightCard from "./past-flight-card";

// Mock data for past flights
const pastFlights = [
  {
    id: "1",
    flightNumber: "42",
    date: "2025-03-15",
    rocketName: "Falcon 9",
    missionPatch: "https://example.com/patch1.png",
  },
  {
    id: "2",
    flightNumber: "88",
    date: "2025-04-21",
    rocketName: "Starship",
    missionPatch: "https://example.com/patch2.png",
  },
  {
    id: "3",
    flightNumber: "120",
    date: "2025-06-10",
    rocketName: "Falcon Heavy",
    missionPatch: "https://example.com/patch3.png",
  },
  // Add more past flights as needed
];

const PastFlightsScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <FlatList
        data={pastFlights}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 cards per row
        renderItem={({ item }) => {
          return (
            <PastFlightCard
              flightNumber={item.flightNumber}
              date={item.date}
              rocketName={item.rocketName}
              missionPatch={item.missionPatch}
              onPress={() => console.log("Pressed", item.flightNumber)}
            />
          );
        }}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 16,
    },
    flatListContent: {
      paddingBottom: 16, // Add padding at the bottom
    },
    placeholder: {
      flex: 1,
      margin: 8, // Match the margin of the cards
    },
  });
};

export default PastFlightsScreen;

import { View, FlatList, StyleSheet } from "react-native";
import UpcomingFlightCard from "./launch-flight-card";
import { useFetchLaunches } from "@/data/hooks/use-fetch-launches";
import { useTheme } from "@/theme/theme-context";
import LoadingView from "@/presentation/shared/components/loading-view";
import ErrorView from "@/presentation/shared/components/error-view";

const AllLaunchesScreen = () => {
  const styles = useStyles();
  const { data: launches, isLoading, error } = useFetchLaunches();

  if (isLoading) return <LoadingView />;
  if (error) return <ErrorView />;

  return (
    <View style={styles.container}>
      <FlatList
        data={launches}
        keyExtractor={(item) => item.flight_number.toString()}
        renderItem={({ item }) => (
          <UpcomingFlightCard
            launch={item}
            onPress={() => alert(`Details for ${item.flight_number}`)}
          />
        )}
      />
    </View>
  );
};

export default AllLaunchesScreen;

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background, // Use theme color
      padding: 16,
    },
  });
};

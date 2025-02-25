import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import useTextStyles from "@/presentation/shared/styles/use-text-styles";
import LoadingView from "@/presentation/shared/components/loading-view";
import ErrorView from "@/presentation/shared/components/error-view";
import { useLocalSearchParams } from "expo-router";
import { useFetchLaunchByFlightNumber } from "@/presentation/features/launches/launch-details/hooks/use-fetch-launch-by-flight-number";
import { useTheme } from "@/presentation/context/theme-context";

const LaunchDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: launch, isLoading, error } = useFetchLaunchByFlightNumber(id);

  const textStyles = useTextStyles();
  const styles = useStyles();

  if (isLoading) return <LoadingView />;
  if (error || !launch) return <ErrorView />;

  return (
    <ScrollView style={styles.container}>
      {/* Mission Name */}
      <Text style={[textStyles.textPrimary, styles.missionName]}>
        {launch.mission_name}
      </Text>

      {/* Rocket Details */}
      <View style={styles.card}>
        <Text style={[textStyles.textPrimary, styles.sectionTitle]}>
          Rocket
        </Text>
        <Text style={textStyles.textSecondary}>
          Name: {launch.rocket.rocket_name}
        </Text>
        <Text style={textStyles.textSecondary}>
          Type: {launch.rocket.rocket_type}
        </Text>
      </View>

      {/* Launch Details */}
      <View style={styles.card}>
        <Text style={[textStyles.textPrimary, styles.sectionTitle]}>
          Launch
        </Text>
        <Text style={textStyles.textSecondary}>
          Flight Number: {launch.flight_number}
        </Text>
        <Text style={textStyles.textSecondary}>
          Launch Year: {launch.launch_year}
        </Text>
        <Text style={textStyles.textSecondary}>
          Launch Date (UTC): {launch.launch_date_utc}
        </Text>
      </View>

      {/* Mission Details */}
      <View style={styles.card}>
        <Text style={[textStyles.textPrimary, styles.sectionTitle]}>
          Mission Details
        </Text>
        <Text style={textStyles.textSecondary}>{launch.details}</Text>
      </View>
    </ScrollView>
  );
};

export default LaunchDetailsScreen;

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 16,
    },
    missionName: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 24,
      color: theme.textPrimary,
    },
    card: {
      backgroundColor: theme.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 12,
      color: theme.textPrimary,
    },
  });
};

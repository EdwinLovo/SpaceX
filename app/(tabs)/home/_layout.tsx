import { useTheme } from "@/context/theme-context";
import { Stack } from "expo-router";

export default function LaunchLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.surface,
        },
        headerTitleStyle: {
          color: theme.textPrimary,
          fontSize: 18,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "All Launches" }} />
      <Stack.Screen
        name="launch-details/[id]"
        options={{
          title: "Launch Details",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}

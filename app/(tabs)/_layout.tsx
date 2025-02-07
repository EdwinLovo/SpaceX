import { Tabs } from "expo-router";
import React from "react";

import { useTheme } from "@/theme/theme-context";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.textPrimary,
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.surface,
        },
        headerTitleStyle: {
          color: theme.textPrimary,
          fontSize: 18,
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: theme.surface, // Set background color dynamically
          elevation: 0, // Removes shadow on Android
          shadowOpacity: 0, // Removes shadow on iOS
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Flights",
          headerTitle: "Upcoming Flights",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="past-flights"
        options={{
          title: "Past",
          headerTitle: "Past Flights",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

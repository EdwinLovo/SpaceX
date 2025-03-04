import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/presentation/context/theme-context";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.textPrimary,
        headerShown: false,
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
        name="home"
        options={{
          title: "Launches",
          headerTitle: "All Launches",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="next-launch"
        options={{
          title: "Next Launch",
          headerTitle: "Next Launch",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: "AI",
          headerTitle: "AI Helper",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitle: "My Profile",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

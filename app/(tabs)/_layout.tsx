import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { useTheme } from '@/theme/theme-context';

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.textPrimary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.surface, // Set background color dynamically
          elevation: 0, // Removes shadow on Android
          shadowOpacity: 0, // Removes shadow on iOS
          borderTopWidth: 0
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
}

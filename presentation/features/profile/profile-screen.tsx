import { useAuthStore } from "@/data/state/use-auth-store";
import { useTheme } from "@/presentation/context/theme-context";
import ErrorView from "@/presentation/shared/components/error-view";
import useTextStyles from "@/presentation/shared/styles/use-text-styles";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const { theme } = useTheme();
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const onSignOut = useAuthStore((state) => state.signOut);

  const handleSignOut = async () => {
    await onSignOut();
    router.replace("/"); // Navigate to login after signing out
  };

  if (!user) return <ErrorView />;

  return (
    <View style={styles.container}>
      {user.photoURL && (
        <Image source={{ uri: user.photoURL }} style={styles.avatar} />
      )}
      <Text style={textStyles.textPrimary}>
        {user.displayName || "No Name"}
      </Text>
      <Text style={textStyles.textSecondary}>{user.email || "No Email"}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Out"
          color={theme.primary}
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      backgroundColor: theme.background,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    email: {
      fontSize: 16,
      marginBottom: 20,
    },
    buttonContainer: {
      width: "80%",
      marginTop: 10,
    },
  });
};

export default ProfileScreen;

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/theme-context";

const SignUpScreen = () => {
  const { theme } = useTheme();
  const styles = useStyles();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor={theme.textSecondary}
      />

      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor={theme.textSecondary}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Un</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.signupText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 32,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 24,
      color: theme.textPrimary,
    },
    input: {
      width: "100%",
      padding: 12,
      marginBottom: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ccc",
      backgroundColor: theme.surface,
      color: theme.textPrimary,
    },
    button: {
      width: "100%",
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: "center",
      backgroundColor: theme.primary,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.background,
    },
    signupText: {
      marginTop: 16,
      textDecorationLine: "underline",
      color: theme.textSecondary,
    },
  });
};

export default SignUpScreen;

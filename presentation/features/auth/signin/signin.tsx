import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useSignIn } from "@/presentation/features/auth/signin/hooks/use-signin";
import { useErrorAlert } from "@/presentation/shared/hooks/use-error-alert";
import { useTheme } from "@/presentation/context/theme-context";

const SignInScreen = () => {
  const { theme } = useTheme();
  const styles = useStyles();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: login, error, isError, isPending } = useSignIn();

  const handleLogin = async () => {
    login({ username: username, password: password });
  };

  // Show alert when there is an error
  useErrorAlert(isError, error?.message);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

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

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        {isPending ? (
          <ActivityIndicator size="small" color={theme.background} />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
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

export default SignInScreen;

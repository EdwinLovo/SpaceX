import { useEffect } from "react";
import { Alert } from "react-native";

export const useErrorAlert = (
  isError: boolean,
  message?: string
) => {
  useEffect(() => {
    if (isError) {
      Alert.alert("Error", message || "An unexpected error occurred.", [
        { text: "OK", style: "cancel" },
      ]);
    }
  }, [isError, message]);
};

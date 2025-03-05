import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";

export const useImagePicker = () => {
  const [image, setImage] = useState<string | null>(null);
  const [base64, setBase64] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.status !== "granted") {
      Alert.alert("Permission Denied", "You need to allow access to proceed.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1, // Remove base64: true, we'll get it manually
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);

      // Get base64 manually
      const base64String = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      setBase64(base64String);
    }
  };

  return { image, base64, pickImage };
};

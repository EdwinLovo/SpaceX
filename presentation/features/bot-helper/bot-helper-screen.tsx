import React, { useState } from "react";
import {
  View,
  Image,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "@/presentation/context/theme-context";

const AIHelperScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [base64, setBase64] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const { theme } = useTheme();

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.status !== "granted") {
      Alert.alert("Permission Denied", "You need to allow access to proceed.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setBase64(result.assets[0].base64 || null);
    }
  };

  const uploadData = async () => {
    if (!base64 || !message.trim()) {
      Alert.alert("Error", "Please select an image and enter a message.");
      return;
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64, message }),
      });

      const data = await response.json();
      Alert.alert("Success", "Image and message uploaded successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to upload data");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.topContainer}>
        {image ? (
          <TouchableOpacity onPress={pickImage}>
            <Image source={{ uri: image }} style={styles.image} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.pickImageButton,
              { borderColor: theme.textSecondary },
            ]}
            onPress={pickImage}
          >
            <Text
              style={[
                styles.pickImageButtonText,
                { color: theme.textSecondary },
              ]}
            >
              Pick Image
            </Text>
          </TouchableOpacity>
        )}

        <TextInput
          style={[
            styles.input,
            { borderColor: theme.textSecondary, color: theme.textPrimary },
          ]}
          placeholder="Enter your message..."
          placeholderTextColor={theme.textSecondary}
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.secondary }]}
        onPress={uploadData}
      >
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  topContainer: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  pickImageButton: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  pickImageButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: "top",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AIHelperScreen;

import React, { useState } from "react";
import {
  View,
  Image,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "@/presentation/context/theme-context";
import * as FileSystem from "expo-file-system";

const AIHelperScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [base64, setBase64] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState<string | null>(null);

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
      setImage(result.assets[0].uri);
      // Get base64 manually
      const base64String = await FileSystem.readAsStringAsync(
        result.assets[0].uri,
        {
          encoding: FileSystem.EncodingType.Base64,
        }
      );
      setBase64(base64String);
    }
  };

  const uploadData = async () => {
    if (!base64 || !message.trim()) {
      Alert.alert("Error", "Please select an image and enter a message.");
      return;
    }

    setLoading(true);
    setGeminiResponse(null);

    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType: "image/jpeg", // Adjust if needed
                  data: base64,
                },
              },
              {
                text: message,
              },
            ],
          },
        ],
      };

      const API_ENDPOINT =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"; // Replace
      const API_KEY = "AIzaSyBZEwCzt82HhqqNqUgtvuzF1FLrDYEVkiY"; // Replace

      const response = await fetch(`${API_ENDPOINT}?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (
        data &&
        data.candidates &&
        data.candidates[0].content &&
        data.candidates[0].content.parts
      ) {
        setGeminiResponse(data.candidates[0].content.parts[0].text);
      } else {
        setGeminiResponse("Error: Could not process image.");
      }
    } catch (error) {
      console.error("Error analyzing image:", error);
      setGeminiResponse(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView // Wrap the entire content in a ScrollView
      contentContainerStyle={[
        styles.scrollViewContainer,
        { backgroundColor: theme.background },
      ]}
    >
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
        disabled={loading}
      >
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" />}
      {geminiResponse && (
        <View style={styles.responseContainer}>
          <Text style={{ color: theme.textPrimary }}>{geminiResponse}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "space-between",
  },
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
  responseContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default AIHelperScreen;

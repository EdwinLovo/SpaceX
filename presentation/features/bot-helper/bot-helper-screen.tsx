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
import { useTheme } from "@/presentation/context/theme-context";
import { useAIHelper } from "./hooks/use-ai-bot";
import { useImagePicker } from "./hooks/use-image-picker";

const AIHelperScreen = () => {
  const { theme } = useTheme();
  const { image, base64, pickImage } = useImagePicker();
  const [message, setMessage] = useState<string>("");
  const aiHelperMutation = useAIHelper();

  const uploadData = () => {
    if (!base64 || !message.trim()) {
      Alert.alert("Error", "Please select an image and enter a message.");
      return;
    }

    aiHelperMutation.mutate(
      { base64, message },
      {
        onSuccess: (response) => {
          Alert.alert("Success", response);
        },
        onError: (error) => {
          Alert.alert("Error", error.message);
        },
      }
    );
  };

  return (
    <ScrollView
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
        disabled={aiHelperMutation.isPending}
      >
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>

      {aiHelperMutation.isPending && <ActivityIndicator size="large" />}
      {aiHelperMutation.isSuccess && (
        <View style={styles.responseContainer}>
          <Text style={{ color: theme.textPrimary }}>
            {aiHelperMutation.data}
          </Text>
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

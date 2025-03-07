import React, { useState } from "react";
import {
  View,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useTheme } from "@/presentation/context/theme-context";
import { useImagePicker } from "./hooks/use-image-picker";
import { useGemini } from "./hooks/use-gemini";
import { ImageAnalysis } from "@/data/models/ai/image-analysis";
import AnalysisView from "./analysis-view";

const GeminiScreen = () => {
  const { theme } = useTheme();
  const { image, base64, pickImage, clearImage } = useImagePicker();
  const aiHelperMutation = useGemini();
  const [imageAnalysis, setImageAnalysis] = useState<ImageAnalysis>();

  const uploadData = () => {
    if (!base64) {
      Alert.alert("Error", "Please select an image.");
      return;
    }

    aiHelperMutation.mutate(
      { base64 },
      {
        onSuccess: (response) => {
          setImageAnalysis(response);
        },
        onError: (error) => {
          Alert.alert("Error", error.message);
        },
      }
    );
  };

  const clearData = () => {
    setImageAnalysis(undefined);
    clearImage();
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
      </View>

      {aiHelperMutation.isPending && <ActivityIndicator size="large" />}

      {imageAnalysis && <AnalysisView imageAnalysis={imageAnalysis} />}

      {imageAnalysis ? (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={clearData}
        >
          <Text style={styles.buttonText}>Clear Data</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.secondary }]}
          onPress={uploadData}
          disabled={aiHelperMutation.isPending}
        >
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
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

export default GeminiScreen;

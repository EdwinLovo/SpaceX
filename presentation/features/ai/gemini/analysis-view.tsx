import { ImageAnalysis } from "@/data/models/ai/image-analysis";
import { useTheme } from "@/presentation/context/theme-context";
import useTextStyles from "@/presentation/shared/styles/use-text-styles";
import { StyleSheet, Text, View } from "react-native";

const AnalysisView = ({ imageAnalysis }: { imageAnalysis: ImageAnalysis }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <View style={styles.responseContainer}>
      <Text style={textStyles.textPrimary}>Summary:</Text>
      <Text style={textStyles.textSecondary}>{imageAnalysis.summary}</Text>

      <Text style={textStyles.textPrimary}>Key Points:</Text>
      <Text style={textStyles.textSecondary}>{imageAnalysis.keyPoints}</Text>

      <Text style={textStyles.textPrimary}>Recommendations:</Text>
      <Text style={textStyles.textSecondary}>
        {imageAnalysis.recommendations}
      </Text>

      <Text style={textStyles.textPrimary}>Insights:</Text>
      <Text style={textStyles.textSecondary}>{imageAnalysis.insights}</Text>

      <Text style={textStyles.textPrimary}>Conclusion:</Text>
      <Text style={textStyles.textSecondary}>{imageAnalysis.conclusion}</Text>
    </View>
  );
};

const useStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    responseContainer: {
      marginVertical: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: "#ccc",
    },
  });
};

export default AnalysisView;

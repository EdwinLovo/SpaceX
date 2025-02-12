import { useTheme } from "@/context/theme-context";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

const ErrorView = () => {
  const styles = useStyles();

  return (
    <View style={styles.errorContainer}>
      <LottieView
        source={require("../../assets/lottie/error-animation.json")} // Replace with your Lottie animation file
        autoPlay
        loop
        style={styles.loadingAnimation}
      />
      <Text style={styles.errorText}>Oops! Something went wrong.</Text>
      <Text style={styles.errorSubText}>
        Please check your connection and try again.
      </Text>
    </View>
  );
};

export default ErrorView;

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    loadingAnimation: {
      width: 200,
      height: 200,
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
      padding: 16,
    },
    errorImage: {
      width: 150,
      height: 150,
      marginBottom: 16,
    },
    errorText: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    errorSubText: {
      color: theme.textSecondary,
      fontSize: 14,
      textAlign: "center",
      marginTop: 8,
    },
  });
};

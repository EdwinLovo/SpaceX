import { useTheme } from "@/theme/theme-context";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

const LoadingView = () => {
  const styles = useStyles();

  return (
    <View style={styles.loadingContainer}>
      <LottieView
        source={require("../../assets/lottie/loading-animation.json")} // Replace with your Lottie animation file
        autoPlay
        loop
        style={styles.loadingAnimation}
      />
      <Text style={styles.loadingText}>Loading Launches...</Text>
    </View>
  );
};

export default LoadingView;

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    loadingAnimation: {
      width: 200,
      height: 200,
    },
    loadingText: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 16,
    },
  });
};

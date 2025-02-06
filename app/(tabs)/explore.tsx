import useStyles from "@/theme/styles";
import { View, Text } from "react-native";

export default function TabTwoScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore</Text>
    </View>
  );
}

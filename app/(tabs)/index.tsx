import useStyles from "@/theme/styles";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}


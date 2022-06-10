import react from "react";
import { Image, Text } from "react-native-web";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} alt="logo" width={180} height={180} />
      <StatusBar style="auto" />
    </View>
  );
};

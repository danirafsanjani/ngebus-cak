import React from "react";
import { ImageBackground, SafeAreaView, Text, Dimensions, StyleSheet, TouchableOpacity, fontFamily } from "react-native";

const { width, height } = Dimensions.get("window");
const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#505050" };
const Bold = (props) => <Text style={{ fontWeight: "bold" }}>{props.children}</Text>;

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require("../assets/onboarding1.png")} style={styles.onboarding}></ImageBackground>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.tittle1}>
        to <Bold>Ngebus Cak!</Bold>
      </Text>
      <Text style={styles.subtitle}>Ngebus Cak! adalah sebuah aplikasi pemesanan tiket Suroboyo Bus yang berguna buat kamu yang mau naik Bus dengan cara yang keren!</Text>
      <TouchableOpacity onPress={() => navigation.replace("LoginScreen")} style={styles.button}>
        <Text style={styles.textbutton}>Let’s Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    marginTop: 450,
    fontWeight: "600",
    color: Warna.putih,
    marginLeft: 25,
  },
  tittle1: {
    fontSize: 30,
    marginTop: 1,
    fontWeight: "600",
    color: Warna.putih,
    marginLeft: 25,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 25,
    marginHorizontal: 10,
    color: Warna.putih,
    textAlign: "justify",
    justifyContent: "center",
  },
  onboarding: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: "stretch",
  },
  button: {
    flex: 10,
    margin: 15,
    marginTop: 55,
    height: 10,
    position: "relative",
    borderRadius: 30,
    padding: 5,
    backgroundColor: Warna.putih,
    justifyContent: "center",
    alignItems: "center",
  },
  textbutton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: Warna.hitam,
  },
});

export default OnboardingScreen;

import React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#FF7979", text: "#505050" };
const ForgotScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.putih }}>
      <Image source={require("../assets/forgot.png")} style={styles.image}></Image>
      <Text style={styles.tittle}>Forget your password?</Text>
      <Text style={styles.subtitle}>Don’t worry, it happens. Just enter the email that associated with your account.</Text>
      <TextInput style={styles.email} placeholder="Email" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.textbutton}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    marginHorizontal: 60,
  },
  tittle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 15,
    marginHorizontal: 10,
    fontSize: 15,
    textAlign: "justify",
    color: Warna.text,
  },
  email: {
    marginBottom: 5,
    margin: 20,
    fontSize: 12,
    fontWeight: "bold",
    color: Warna.hitam,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  button: {
    marginBottom: 180,
    backgroundColor: Warna.tombol,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  textbutton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: Warna.putih,
  },
});

export default ForgotScreen;

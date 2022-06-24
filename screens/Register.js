import React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#FF7979", text: "#505050" };
const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.putih }}>
      <Image source={require("../assets/register.png")} style={styles.image}></Image>
      <Text style={styles.tittle}>Welcome!</Text>
      <Text style={styles.subtitle}>Let’s get you signed up.</Text>
      <TextInput style={styles.email} placeholder="Email" />
      <TextInput secureTextEntry={true} style={styles.password} placeholder="Password" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.textbutton}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.text1}>Sign In</Text>
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
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 45,
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
    color: Warna.text,
  },
  email: {
    marginBottom: 20,
    margin: 20,
    fontSize: 12,
    fontWeight: "bold",
    color: Warna.hitam,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  password: {
    marginTop: 0.5,
    margin: 20,
    fontSize: 12,
    fontWeight: "bold",
    color: Warna.hitam,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  button: {
    marginBottom: 20,
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
  text: {
    marginTop: 20,
    color: Warna.text,
    textAlign: "center",
    fontWeight: "bold",
  },
  text1: {
    marginBottom: 45,
    color: Warna.tombol,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;

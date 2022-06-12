import React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#FF7979", text: "#505050" };
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.putih }}>
      <Text style={styles.tittle}>Welcome Back!</Text>
      <Text style={styles.subtitle}>You’ve been missed.</Text>
      <TextInput style={styles.email} placeholder="Email" />
      <TextInput secureTextEntry={true} style={styles.password} placeholder="Password" />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotScreen")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.textbutton}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Don’t have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={styles.text1}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tittle: {
    marginTop: 150,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "regular",
    textAlign: "center",
    color: Warna.text,
  },
  email: {
    marginTop: 60,
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
  forgot: {
    textAlign: "right",
    fontWeight: "bold",
    marginRight: 30,
    fontSize: 11.5,
    color: Warna.text,
  },
  button: {
    marginTop: 20,
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
    color: Warna.tombol,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;

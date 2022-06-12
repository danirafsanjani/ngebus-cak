import React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#FF7979", text: "#505050" };
const ForgotScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.putih }}>
      <Text style={styles.tittle}>Forget your password?</Text>
      <Text style={styles.subtitle}>Don’t worry, it happens. Just enter the email that associated with your account.</Text>
      <TextInput style={styles.email} placeholder="Email" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.textbutton}>Submit</Text>
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
  button: {
    marginTop: 5,
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

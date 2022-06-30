import React from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.background }}>
      <Image source={require("../assets/profile.png")} style={styles.image}></Image>
      <Text style={styles.tittle}>Welcome!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text}>Pesan Tiket</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: Warna.putih,
  },
  button: {
    backgroundColor: Warna.tombol,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
});

export default DashboardScreen;

import React from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.background }}>
      <Text style={styles.tittle}>Welcome to Ngebus Cak!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SbyBusScreen")}>
        <Text style={styles.text}>Surabaya Bus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("WisataScreen")}>
        <Text style={styles.text}>Tempat Wisata</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UKMScreen")}>
        <Text style={styles.text}>Sentra UKM</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tittle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
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

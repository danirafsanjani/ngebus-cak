import React from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#F2EBE9", background: "#F4F4F4" };

const SbyBusScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Warna.background }}>
      <Text style={styles.textlogo}>Surabaya Bus</Text>
      <Image style={styles.logo} source={require("../assets/bus.png")} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SbyBusDetail1")}>
        <Text style={styles.text}>PURABAYA-RAJAWALI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SbyBusDetail2")}>
        <Text style={styles.text}>UNESA-ITS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SbyBusDetail3")}>
        <Text style={styles.text}>BUS TUMPUK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SbyBusDetail4")}>
        <Text style={styles.text}>MERR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SbyBusDetail5")}>
        <Text style={styles.text}>TIJ-YONO SUWOYO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textlogo: {
    marginTop: 45,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    marginTop: 20,
    width: 260,
    height: 260,
    borderRadius: 10,
    alignSelf: "center",
  },
  button: {
    backgroundColor: Warna.putih,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    color: Warna.hitam,
  },
});

export default SbyBusScreen;

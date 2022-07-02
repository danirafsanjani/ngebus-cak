import React from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

const SbyBusScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.background }}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Warna.tombol,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default SbyBusScreen;

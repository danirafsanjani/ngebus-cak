import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Box } from "native-base";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.putih }}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <Box style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SbyBusScreen")}>
          <Image style={styles.image} source={require("../assets/dashboard.png")} />
        </TouchableOpacity>
      </Box>
      <Box style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("WisataScreen")}>
          <Image style={styles.image} source={require("../assets/dashboard1.png")} />
        </TouchableOpacity>
      </Box>
      <Box style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UKMScreen")}>
          <Image style={styles.image} source={require("../assets/dashboard2.png")} />
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  logo: {
    marginTop: 30,
    width: 65,
    height: 65,
    alignSelf: "center",
  },
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
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
});

export default DashboardScreen;

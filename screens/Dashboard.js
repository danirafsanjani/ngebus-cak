import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#505050" };
const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.putih }}>
      <Text style={styles.tittle}>Ini Dashboard!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tittle: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 30,
  },
});

export default Dashboard;

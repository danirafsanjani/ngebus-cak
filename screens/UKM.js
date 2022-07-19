import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#F4F4F4" };

class UKMScreen extends Component {
  state = {
    isUKMLoading: true,
    ukm: [],
  };

  fetchData = () => {
    fetch(`http://suroboyobus.com/gobis/sbybus/ukm/listcat`)
      .then((response) => response.json())
      .then((json) => this.setState({ ukm: json }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isUKMLoading: false }));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("UKMDetail", { id: item.uniqid })}>
          <Box style={styles.box}>
            <Text style={styles.text}>{item.nama}</Text>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  render() {
    const { isUKMLoading, ukm } = this.state;
    return (
      <>
        {isUKMLoading ? (
          <Center flex={1}>
            <Spinner color={Warna.tombol} size="lg" />
          </Center>
        ) : (
          <ScrollView>
            <Text style={styles.textlogo}>SME Centre</Text>
            <Image style={styles.logo} source={require("../assets/ukm.png")} />
            <FlatList data={ukm} renderItem={this.renderItem} refreshing={isUKMLoading} />
          </ScrollView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  textlogo: {
    marginTop: 35,
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
  box: {
    backgroundColor: Warna.putih,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  text: {
    fontSize: 15,
    color: Warna.hitam,
  },
});

export default UKMScreen;

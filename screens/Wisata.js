import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#F4F4F4" };

class WisataScreen extends Component {
  state = {
    isWisataLoading: true,
    wisata: [],
  };

  fetchData = () => {
    fetch(`http://suroboyobus.com/gobis/sbybus/wisata/listcat`)
      .then((response) => response.json())
      .then((json) => this.setState({ wisata: json }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isWisataLoading: false }));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Box style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate("WisataDetail", { id: item.uniqid })}>
            <Text style={styles.text}>{item.nama}</Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    );
  };

  render() {
    const { isWisataLoading, wisata } = this.state;
    return (
      <>
        {isWisataLoading ? (
          <Center flex={1}>
            <Spinner color={Warna.tombol} size="lg" />
          </Center>
        ) : (
          <ScrollView>
            <Text style={styles.textlogo}>Tour Destination</Text>
            <Image style={styles.logo} source={require("../assets/wisata.png")} />
            <FlatList data={wisata} renderItem={this.renderItem} refreshing={isWisataLoading} />
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

export default WisataScreen;

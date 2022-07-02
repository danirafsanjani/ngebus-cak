import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { StyleSheet, ScrollView } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

class WisataDetailScreen1 extends Component {
  state = {
    isWisataLoading: true,
    wisata: [],
  };

  fetchData = () => {
    const { route } = this.props;
    fetch(`http://suroboyobus.com/gobis/sbybus/wisata/detil/${route.params.id}`)
      .then((response) => response.json())
      .then((json) => this.setState({ wisata: json }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isWisataLoading: false }));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  renderItem = ({ item }) => {
    return (
      <ScrollView>
        <Box style={styles.box}>
          <Text style={styles.tittle}>{item.nama}</Text>
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
          <FlatList data={wisata} renderItem={this.renderItem} refreshing={isWisataLoading} />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: Warna.tombol,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  tittle: {
    fontSize: 20,
    color: Warna.hitam,
  },
  subtittle: {
    fontSize: 15,
    color: Warna.putih,
  },
  image: {
    width: "20%",
    height: "20%",
  },
});

export default WisataDetailScreen1;

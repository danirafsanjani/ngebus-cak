import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { StyleSheet, ScrollView } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

class UKMDetailScreen1 extends Component {
  state = {
    isUKMLoading: true,
    ukm: [],
  };

  fetchData = () => {
    const { route } = this.props;
    fetch(`http://suroboyobus.com/gobis/sbybus/ukm/detil/${route.params.id}`)
      .then((response) => response.json())
      .then((json) => this.setState({ ukm: json }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isUKMLoading: false }));
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
    const { isUKMLoading, ukm } = this.state;
    return (
      <>
        {isWisataLoading ? (
          <Center flex={1}>
            <Spinner color={Warna.tombol} size="lg" />
          </Center>
        ) : (
          <FlatList data={ukm} renderItem={this.renderItem} refreshing={isUKMLoading} />
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

export default UKMDetailScreen1;

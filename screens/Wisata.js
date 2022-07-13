import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

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
        <TouchableOpacity onPress={() => navigation.navigate("WisataDetail", { id: item.uniqid })}>
          <Box style={styles.box}>
            <Text style={styles.text}>{item.nama}</Text>
            <Text style={styles.text}>{item.total}</Text>
          </Box>
        </TouchableOpacity>
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
  text: {
    fontSize: 15,
    color: Warna.putih,
  },
});

export default WisataScreen;

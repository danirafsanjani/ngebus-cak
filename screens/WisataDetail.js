import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#F4F4F4" };

class WisataDetailScreen extends Component {
  state = {
    isWisataLoading: true,
    wisata: [],
  };

  fetchData = () => {
    const { route } = this.props;
    fetch(`http://suroboyobus.com/gobis/sbybus/wisata/list/${route.params.id}`)
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
        <TouchableOpacity onPress={() => navigation.navigate("WisataDetail1", { id: item.uniqid })}>
          <Box style={styles.box}>
            <Text style={styles.text}>{item.nama}</Text>
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

export default WisataDetailScreen;

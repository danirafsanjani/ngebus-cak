import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#F4F4F4" };

class UKMDetailScreen extends Component {
  state = {
    isUKMLoading: true,
    ukm: [],
  };

  fetchData = () => {
    const { route } = this.props;
    fetch(`http://suroboyobus.com/gobis/sbybus/ukm/list/${route.params.id}`)
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
        <TouchableOpacity onPress={() => navigation.navigate("UKMDetail1", { id: item.uniqid })}>
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
          <FlatList data={ukm} renderItem={this.renderItem} refreshing={isUKMLoading} />
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

export default UKMDetailScreen;

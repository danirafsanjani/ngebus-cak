import React, { Component } from "react";
import { Center, FlatList, Spinner } from "native-base";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");
const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

class SbyBusDetailScreen1 extends Component {
  state = {
    isMapLoading: true,
    map: [],
  };

  fetchData = () => {
    fetch(`http://suroboyobus.com/gobis/sbybus/bustrackutara`)
      .then((response) => response.json())
      .then((json) => this.setState({ maps: json }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isMapLoading: false }));
    console.log(map);
  };

  componentDidMount = () => {
    this.fetchData();
  };

  renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          title={item.info}
          coordinate={{
            latitude: item.lat,
            longitude: item.lng,
          }}
        />
      </SafeAreaView>
    );
  };

  render() {
    const { isMapLoading, map } = this.state;
    return (
      <>
        {isMapLoading ? (
          <Center flex={1}>
            <Spinner color={Warna.tombol} size="lg" />
          </Center>
        ) : (
          <FlatList data={map} renderItem={this.renderItem} refreshing={isMapLoading} />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },
});

export default SbyBusDetailScreen1;

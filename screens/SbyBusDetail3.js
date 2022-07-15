import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const SbyBusDetail3 = () => {
  const [markers, updatemarkers] = useState([]);
  const [mapready, setmapready] = useState(false);

  useEffect(() => {
    fetch("http://suroboyobus.com/gobis/sbybus/bustracktumpuk")
      .then((response) => response.json())
      .then((json) => {
        let busnya = [];
        for (let ab of json) {
          busnya.push({ index: busnya.length, coords: { latitude: parseFloat(ab.lat), longitude: parseFloat(ab.lng) }, id: ab.info });
        }
        updatemarkers(busnya);
        setmapready(true);
        console.log("markers:", markers.length);
      })
      .catch((error) => console.error(error));
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {markers.map((marker) => (
          <MapView.Marker coordinate={marker.coords} title={marker.info} index={marker.index} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default SbyBusDetail3;

import React, { useState, useEffect } from "react";
import { Center, Spinner, Text, Box, ScrollView, Image } from "native-base";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

const UKMDetailScreen1 = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [UKMDetail, setUKMDetail] = useState([]);
  useEffect(() => {
    fetch(`http://suroboyobus.com/gobis/sbybus/ukm/detil/${route.params.id}`)
      .then((response) => response.json())
      .then((json) => setUKMDetail(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    console.log(UKMDetail);
  }, []);

  return (
    <>
      {isLoading ? (
        <Center flex={1}>
          <Spinner size="lg" color={Warna.tombol} />
        </Center>
      ) : (
        <ScrollView>
          <Box>
            <Text style={styles.tittle}>{UKMDetail.nama}</Text>
            <Image source={{ uri: "http://www.suroboyobus.com/gobis/public/images/ukm/" + UKMDetail.picture }} style={styles.image} />
            <Text style={styles.tittle}>{UKMDetail.description.img}</Text>
          </Box>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tittle: {
    flex: 1,
    marginTop: 20,
    fontSize: 20,
    color: Warna.hitam,
  },
  subtittle: {
    fontSize: 15,
    color: Warna.hitam,
  },
  image: {
    resizeMode: "contain",
    width: width,
    height: height,
  },
});

export default UKMDetailScreen1;

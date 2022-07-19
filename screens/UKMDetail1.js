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
            <Image source={{ uri: "http://www.suroboyobus.com/gobis/public/images/ukm/" + UKMDetail.picture }} style={styles.image} />
            <Text style={styles.tittle}>{UKMDetail.nama}</Text>
          </Box>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tittle: {
    flex: 1,
    fontSize: 21,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Warna.hitam,
  },
  subtittle: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 30,
    color: Warna.hitam,
  },
  image: {
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 50,
    width: 300,
    height: 200,
  },
});

export default UKMDetailScreen1;

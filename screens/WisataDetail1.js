import React, { useState, useEffect } from "react";
import { Center, Spinner, Text, Box, ScrollView, Image } from "native-base";
import { StyleSheet } from "react-native";

const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#EE4343", background: "#FF7171" };

const WisataDetailScreen1 = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [wisataDetail, setWisataDetail] = useState([]);
  useEffect(() => {
    fetch(`http://suroboyobus.com/gobis/sbybus/wisata/detil/${route.params.id}`)
      .then((response) => response.json())
      .then((json) => setWisataDetail(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    console.log(wisataDetail);
  });

  return (
    <>
      {isLoading ? (
        <Center flex={1}>
          <Spinner size="lg" color={Warna.tombol} />
        </Center>
      ) : (
        <ScrollView>
          <Box>
            <Text style={styles.tittle}>{wisataDetail.nama}</Text>
            <Image style={styles.image} source={{ uri: "http://www.suroboyobus.com/gobis/public/images/wisata/" + wisataDetail.picture }} />
            <Text style={styles.subtittle}>{wisataDetail.description}</Text>
          </Box>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tittle: {
    flex: 1,
    fontSize: 20,
    color: Warna.hitam,
  },
  subtittle: {
    fontSize: 15,
    color: Warna.putih,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default WisataDetailScreen1;

import React from "react";
import { Image, SafeAreaView, Text, Dimensions, FlatList, View, StyleSheet, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");
const Warna = { putih: "#FFFFFF", hitam: "#000000", tombol: "#505050" };

const slides = [
  {
    id: "1",
    Image: require("../assets/Rectangle1.png"),
    title: "Welcome to the app!",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    Image: require("../assets/Rectangle1.png"),
    title: "Enjoy using this app!",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    Image: require("../assets/Rectangle1.png"),
    title: "Enjoy using this app!",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "4",
    Image: require("../assets/Rectangle1.png"),
    title: "Enjoy using this app!",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "5",
    Image: require("../assets/Rectangle1.png"),
    title: "Enjoy using this app!",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItem: "center" }}>
      <Image source={item.Image} style={{ width: width, height: "50%", resizeMode: "contain", marginTop: 45 }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const Footer = () => {
    return (
      <View style={{ height: height * 0.25, justifyContent: "space-between", paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
          {slides.map((_, index) => (
            <View key={index} style={[styles.indicator, currentSlideIndex == index && { backgroundColor: Warna.hitam, width: 25 }]} />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: Warna.putih }}>Get Started</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={[styles.button]} onPress={goNextSlide}>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: Warna.putih }}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Warna.putih }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    marginTop: 20,
    color: "black",
    textAlign: "center",
  },
  indicator: {
    height: 2.5,
    width: 4,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 30,
    backgroundColor: Warna.tombol,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { TabView, SceneMap } from "react-native-tab-view";

const Home = ({ navigation }) => {
  const images = [
    {
      graph1: require("../assets/Group31.png"),
    },
    {
      graph1: require("../assets/Group32.png"),
    },
    {
      graph1: require("../assets/Group33.png"),
    },
  ];
  const tabData = [
    {
      text: "Spot",
    },
    {
      text: "Gainer",
    },
    {
      text: "New Listed",
    },
  ];

  const press = () => {
    navigation.navigate("Xyz");
  };

  // const renderitem = ({ item }) => {
  //   return (
  //     <View>
  //       <TouchableOpacity>
  //         <Text style={{ color: "white", marginLeft: 10, opacity: 0.7 }}>
  //           {item.text}
  //         </Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  const render = ({ item }) => {
    return (
      <View>
        <Image
          style={{ borderWidth: 5, borderColor: "" }}
          source={item.graph1}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#060D1D"
        hidden={false}
        barStyle="light-content"
      />
      <View style={styles.mainview}>
        <Image
          style={{ width: 103, height: 27, marginTop: 35 }}
          source={require("../assets/Framehome.png")}
        />
        <Image
          style={{
            width: 23,
            height: 23,
            // marginTop: 35,
            // justifyContent: "flex-end",
            alignSelf: "flex-end",
            marginTop: 35,
            position: "absolute",
          }}
          source={require("../assets/Group22.png")}
        />
        <Swiper
          autoplay={false}
          dotStyle={(marginTop = 2)}
          paginationStyle={{ top: 135, left: -15 }}
          showsButtons={false}
          loop={true}
          dotColor={"#55596A"}
        >
          <View>
            <Image
              style={styles.slide1}
              source={require("../assets/Swiperimg.png")}
            />
          </View>
          <View>
            <Image
              style={styles.slide1}
              source={require("../assets/Swiperimg.png")}
            />
          </View>
          <View>
            <Image
              style={styles.slide1}
              source={require("../assets/Swiperimg.png")}
            />
          </View>
          <View>
            <Image
              style={styles.slide1}
              source={require("../assets/Swiperimg.png")}
            />
          </View>
        </Swiper>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            style={{ height: 18, width: 21 }}
            source={require("../assets/Group35.png")}
          />
          <Text style={{ color: "#EEEEEE", fontSize: 9, opacity: 0.7 }}>
            NKN Staking special : Enjoy up to 50% reward rate and sha
          </Text>
          <Image source={require("../assets/list.png")} />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          //   style={{ borderWidth: 5, borderColor: "green" }}
          data={images}
          renderItem={render}
          horizontal
        />
      </View>
      <View style={styles.logoview}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 18,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity>
            <Image source={require("../assets/accountlogo.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/securitylogo.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/feelogo.png")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity>
            <Image source={require("../assets/referallogo.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/notificationlogo.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={press}>
            <Image source={require("../assets/morelogo.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060D1D",
  },
  mainview: {
    height: Dimensions.get("window").height / 2.7,
    width: "85%",
    // borderWidth: 1,
    // borderColor: "red",
    // marginHorizontal: 20,
    alignSelf: "center",
    // flexDirection: "row",
    position: "relative",
  },
  slide1: {
    // width: 380,
    resizeMode: "contain",
    width: 300,
    height: 164,
    left: 0,
  },
  logoview: {
    height: Dimensions.get("window").height / 5,
    width: "100%",
    borderWidth: 5,
    borderColor: "#0c1826",
    // borderWidth: 1,
    // borderColor: "green",
  },
});

export default Home;

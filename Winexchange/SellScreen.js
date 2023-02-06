import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

const SellScreen = () => {
  const [color, setColor] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [limitColor, setLimitColor] = useState(false);
  const [marketColor, setMarketColor] = useState(false);
  const [state, setState] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [datas, setDatas] = useState(data4);
  const [modalOpen, setModalOpen] = useState(false);
  const data = [
    {
      price: "0.058508",
      amount: "166,938.50",
    },
    {
      price: "0.057310",
      amount: "6,864.06",
    },
    {
      price: "0.056189",
      amount: "437.00",
    },
    {
      price: "0.056408",
      amount: "6.901.12",
    },
    {
      price: "0.056213",
      amount: "33,152.03",
    },
    {
      price: "0.056102",
      amount: "2,000.00",
    },
  ];
  const data4 = [
    {
      id: "0",
      order: "Open orders",
      // trade: "Trade History",
      // img: require("../assets/Groupvector.png"),
    },
    {
      id: "1",
      order: "Trade History",
    },
    {
      id: "2",
      img: require("../assets/Groupvector.png"),
    },
  ];
  const data1 = [
    {
      percente: "25%",
    },
    {
      percente: "50%",
    },
    {
      percente: "75%",
    },
    {
      percente: "100%",
    },
  ];
  const data2 = [
    {
      value: "0.058508",
      rate: "166,938.50",
    },
    {
      value: "0.057310",
      rate: "6,864.06",
    },
    {
      value: "0.056189",
      rate: "437.00",
    },
    {
      value: "0.056408",
      rate: "6.901.12",
    },
    {
      value: "0.056213",
      rate: "33,152.03",
    },
    {
      value: "0.056102",
      rate: "2,000.00",
    },
  ];

  const data3 = [
    {
      list: "List 1",
    },
    {
      list: "List 2",
    },
    {
      list: "List 3",
    },
  ];

  const dropDown = () => {
    setState(!state);
  };

  const colorchangebuy = () => {
    setColor(true);
    setChangeColor(false);
  };
  const colorchangesell = () => {
    // navigation.navigate("SellScreen");
    setChangeColor(false);
    setColor(true);
  };
  const limitButton = () => {
    setLimitColor(true);
    setMarketColor(false);
  };
  const marketButton = () => {
    setMarketColor(false);
    setLimitColor(true);
  };
  const press = (id) => {
    console.log(id, "xyz");
    const colorChange = datas.map((cval) => {
      if (id === cval.id) {
        return { ...cval, color: true };
      } else {
        return { ...cval, color: false };
      }
    });
    setDatas(colorChange);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <ScrollView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>
                KLV/USDT
              </Text>
              <Image
                style={{ height: 20, width: 20, marginLeft: 10 }}
                source={require("../assets/staricon.png")}
              />
            </View>
            <Image source={require("../assets/chart1.png")} />
          </View>
          <View style={styles.firstbuttonview}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>
              +50.47%
            </Text>
          </View>

          <View style={styles.buypricemainview}>
            <View style={styles.priceview}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ color: "white", fontSize: 12 }}>Price</Text>
                    <Text style={{ color: "white", fontSize: 12 }}>(USDT)</Text>
                  </View>
                  <View>
                    <Text style={{ color: "white", fontSize: 12 }}>Amount</Text>
                    <Text style={{ color: "white", fontSize: 12 }}>(KLV)</Text>
                  </View>
                </View>

                <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                        }}
                      >
                        <Text
                          style={
                            item.price >= 0
                              ? styles.colorRed
                              : styles.colorGreen
                          }
                        >
                          {item.price}
                        </Text>
                        <Text style={{ color: "white", fontSize: 12 }}>
                          {item.amount}
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  height: 45,
                  width: 150,
                  backgroundColor: "#2B2D2F",
                  alignSelf: "center",
                  marginTop: 26,
                  justifyContent: "center",
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  0.057508
                </Text>
                <Text
                  style={{ color: "white", fontSize: 11, textAlign: "center" }}
                >
                  = $0.057508
                </Text>
              </View>
            </View>
            <View style={styles.buysellview}>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end",
                  // borderRadius: 25,
                }}
              >
                <TouchableOpacity
                  // style={{
                  //   height: 35,
                  //   width: 70,
                  //   backgroundColor: "#4ED46C",
                  // }}
                  style={color ? styles.colorGray : styles.colorGreen}
                  onPress={colorchangebuy}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: 5,
                    }}
                  >
                    Buy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // style={{ height: 35, width: 70, backgroundColor: "gray" }}
                  style={changeColor ? styles.colorGrey : styles.colorReds}
                  onPress={colorchangesell}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: 5,
                    }}
                  >
                    Sell
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity
                  onPress={limitButton}
                  style={
                    limitColor ? styles.limitGraystyle : styles.limitGreenstyle
                  }
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: 5,
                    }}
                  >
                    Limit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={marketButton}
                  style={
                    marketColor
                      ? styles.marketGraystyle
                      : styles.marketGreenstyle
                  }
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: 5,
                    }}
                  >
                    Market
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    paddingLeft: 17,
                    marginTop: 15,
                  }}
                >
                  Amount
                </Text>
                <View
                  style={{
                    width: 142,
                    height: 45,
                    borderWidth: 1,
                    borderColor: "white",
                    alignSelf: "flex-end",
                    borderRadius: 5,
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>0</Text>
                  <Text style={{ color: "white" }}>USDT</Text>
                </View>
                <FlatList
                  style={{ alignSelf: "flex-end" }}
                  horizontal
                  data={data1}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          width: 32,
                          height: 30,
                          backgroundColor: "gray",
                          borderRadius: 5,
                          marginLeft: 5,
                          justifyContent: "center",
                          marginTop: 15,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 11,
                          }}
                        >
                          {item.percente}
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "white", fontSize: 11, marginLeft: 16 }}>
                  Available
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{ color: "white", fontSize: 11, marginRight: 7 }}
                  >
                    0.00 USDT
                  </Text>
                  <Image
                    style={{ marginTop: 3 }}
                    source={require("../assets/circleLogo.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              // height: "40%",
              // borderWidth: 1,
              // borderColor: "red",
              height: Dimensions.get("window").height / 4,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
                // height: "40%",
                // borderWidth: 1,
                // borderColor: "red",
                height: Dimensions.get("window").height / 4,
                // flexDirection: "row",
              }}
            >
              <FlatList
                data={data2}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={
                          item.value >= 0
                            ? styles.colorGreens
                            : styles.colorGrays
                        }
                      >
                        {item.value}
                      </Text>
                      <Text style={{ color: "white", fontSize: 12 }}>
                        {item.rate}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <View
              style={{
                width: "50%",
                // height: "40%",
                // borderWidth: 1,
                // borderColor: "red",
                height: Dimensions.get("window").height / 4,
              }}
            >
              <View>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 140,
                    backgroundColor: "#EB4335",
                    alignSelf: "flex-end",
                    justifyContent: "center",
                    borderRadius: 5,
                    marginTop: 78,
                  }}
                  onPress={() => setModalOpen(true)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Sell
                  </Text>
                </TouchableOpacity>

                <View>
                  <TouchableOpacity
                    style={{
                      height: 40,
                      width: 140,
                      backgroundColor: "#2B2D2F",
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      borderRadius: 5,
                      marginTop: 20,
                    }}
                    onPress={dropDown}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text style={{ color: "white" }}>Both Orders</Text>
                      <Image
                        style={{ marginTop: 8 }}
                        source={require("../assets/arrowicon.png")}
                      />
                    </View>
                  </TouchableOpacity>
                  {state && (
                    <View>
                      <FlatList
                        data={data3}
                        renderItem={({ item }) => {
                          return (
                            <View
                              style={{
                                height: 30,
                                width: 139,
                                backgroundColor: "#BDBDBD",
                                marginLeft: 20,
                              }}
                            >
                              <Text style={{ color: "white", marginLeft: 15 }}>
                                {item.list}
                              </Text>
                            </View>
                          );
                        }}
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              // flexDirection: "row",
              marginTop: 15,
            }}
          >
            <FlatList
              data={datas}
              horizontal
              renderItem={(vales) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      marginHorizontal: 12,

                      // position: "relative",
                      // width: "40%",
                    }}
                  >
                    {/* <View style={{}}> */}
                    <Text
                      onPress={() => press(vales?.item?.id)}
                      style={
                        vales?.item?.color
                          ? styles.opentextcolor
                          : styles.opentextcolor1
                      }
                    >
                      {console.log(vales?.item?.color, "dhjbd")}
                      {vales.item.order}
                    </Text>
                    {/* </View> */}
                    {/* <Text style={{ color: "white" }}>{vales.item.trade}</Text> */}
                    <View
                      style={{
                        marginLeft: 26,
                      }}
                    >
                      <Image
                        source={vales.item.img}
                        // style={{
                        //   right: 0,
                        //   borderWidth: 1,
                        //   borderColor: "green",
                        //   position: "absolute",
                        //   // textAlign: "flex-end",
                        // }}
                      />
                    </View>
                  </View>
                );
              }}
            />
            {/* <Text onPress={()=>press()} style={{ color: "white" }}>open orders</Text>
          <Text style={{ color: "white" }}>Trade History</Text>
          <Image source={require("../assets/Groupvector.png")} /> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060D1D",
  },
  subcontainer: {
    marginHorizontal: 18,
    marginTop: 25,
  },
  firstbuttonview: {
    height: 25,
    width: 63,
    backgroundColor: "#38B781",
    justifyContent: "center",
  },
  buypricemainview: {
    width: "100%",
    // height: "56.5%",
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 40,
    flexDirection: "row",
    height: Dimensions.get("window").height / 2.8,
  },
  priceview: {
    width: "50%",
    height: "100%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  priceview: {
    width: "50%",
    height: "100%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  buysellview: {
    width: "50%",
    height: "100%",
    // borderWidth: 1,
    // borderColor: "green",
  },
  colorRed: {
    color: "white",
    fontSize: 12,
    color: "#EB4335",
  },
  colorGray: {
    height: 35,
    width: 70,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  colorGreen: {
    height: 35,
    width: 70,
    // backgroundColor: "#4ED46C",
    backgroundColor: "gray",
    borderRadius: 5,
  },
  colorGrey: {
    height: 35,
    width: 70,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  colorReds: {
    height: 35,
    width: 70,
    backgroundColor: "red",
    borderRadius: 5,
  },
  limitGraystyle: {
    height: 35,
    width: 70,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  limitGreenstyle: {
    height: 35,
    width: 70,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  marketGraystyle: {
    height: 35,
    width: 70,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  marketGreenstyle: {
    height: 35,
    width: 70,
    backgroundColor: "#1B75D0",
    borderRadius: 5,
  },
  colorGreens: {
    color: "#4ED46C",
    fontSize: 12,
  },
  opentextcolor: {
    color: "#4ED46C",
    borderBottomWidth: 3,
    borderBottomColor: "#4ED46C",
  },
  opentextcolor1: {
    color: "white",
  },
});
export default SellScreen;

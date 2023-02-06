import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Market = () => {
  const data = [
    {
      text: "KLV",
      text1: "SHIB/",
      valuePercent: -11.32,
      valuePoints: "0.017657",
      valueDollars: "= $0.0000694",
      graph: require("../assets/redgraph.png"),
    },
    {
      text: "KLV",
      text1: "SHIB/",
      valuePercent: 11.32,
      valuePoints: "0.017657",
      valueDollars: "= $0.0000694",
      graph: require("../assets/greengraph.png"),
    },
    {
      text: "KLV",
      text1: "SHIB/",
      valuePercent: -11.32,
      valuePoints: "0.017657",
      valueDollars: "= $0.0000694",
      graph: require("../assets/redgraph.png"),
    },
  ];

  const data2 = [
    {
      id: 1,
      text: "Favourites",
      currency: [
        {
          id: 0,
          currencyName: "BTC",
          extendData: [
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 0,
            },
            {
              symbol: "KLV/BTC",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 1,
            },
            {
              symbol: "KLV/TRX",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 2,
            },
            {
              symbol: "KLV/USDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 3,
            },
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 4,
            },
          ],
        },
        { id: 1, currencyName: "BNB" },
        { id: 2, currencyName: "ETH" },
        { id: 3, currencyName: "TRX" },
      ],
    },
    {
      id: 2,
      text: "Spot",
      currency: [
        {
          id: 0,
          currencyName: "BTC",
          extendData: [
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 0,
            },
            {
              symbol: "KLV/BTC",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 1,
            },
            {
              symbol: "KLV/TRX",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 2,
            },
            {
              symbol: "KLV/USDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 3,
            },
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 4,
            },
          ],
        },
        { id: 1, currencyName: "BNB" },
        { id: 2, currencyName: "ETH" },
        { id: 3, currencyName: "TRX" },
      ],
    },
    {
      id: 3,
      text: "New Listed",
      currency: [
        {
          id: 0,
          currencyName: "BTC",
          extendData: [
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 0,
            },
            {
              symbol: "KLV/BTC",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 1,
            },
            {
              symbol: "KLV/TRX",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 2,
            },
            {
              symbol: "KLV/USDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 3,
            },
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 4,
            },
          ],
        },
        { id: 1, currencyName: "BNB" },
        { id: 2, currencyName: "ETH" },
        { id: 3, currencyName: "TRX" },
      ],
    },
    {
      id: 4,
      text: "Top Gainers",
      currency: [
        {
          id: 0,
          currencyName: "BTC",
          extendData: [
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 0,
            },
            {
              symbol: "KLV/BTC",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 1,
            },
            {
              symbol: "KLV/TRX",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 2,
            },
            {
              symbol: "KLV/USDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 3,
            },
            {
              symbol: "KLV/SDT",
              lastPrice: "0.057608",
              Change: "10.2%",
              id: 4,
            },
          ],
        },
        { id: 1, currencyName: "BNB" },
        { id: 2, currencyName: "ETH" },
        { id: 3, currencyName: "TRX" },
      ],
    },
  ];

  const [data1, setData1] = useState(data2);
  const [currencyData, setCurrencyData] = useState();

  // console.log(currencyData, "opjuui");
  const selectedFunction = (item) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 22,
          paddingRight: 22,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white" }}>{item?.item?.symbol}</Text>
        <Text style={{ color: "white" }}>{item?.item?.lastPrice}</Text>
        <Text style={{ color: "white" }}>{item?.item?.Change}</Text>
      </View>
    );
  };

  const renderitem = ({ item }) => {
    return (
      <View
        style={{
          height: 85,
          width: 145,
          borderWidth: 5,
          borderColor: "#0c1826",
          justifyContent: "space-around",
          backgroundColor: "#060D1D",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "#4ED46C", marginLeft: -5, fontSize: 13 }}>
            {item.text1}
            <Text style={{ color: "white" }}>{item.text}</Text>
          </Text>
          <Text
            style={
              item.valuePercent >= 0
                ? // ? [{ color: "green" }, { fontSize: 9 }]
                  styles.new
                : [{ color: "red" }, { fontSize: 9 }]
            }
          >
            {item.valuePercent}%
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <Text style={{ color: "white", fontSize: 12 }}>
              {item.valuePoints}
            </Text>
            <Text style={{ color: "#4ED46C", fontSize: 12 }}>
              {item.valueDollars}
            </Text>
          </View>
          <Image
            style={{ marginTop: 15, height: 14, width: 45, color: "green" }}
            source={item.valuePercent >= 0 ? item.graph : item.graph}
          />
        </View>
      </View>
    );
  };

  const press = (id) => {
    const changedData = data1.map((cvalue, index) => {
      if (id === cvalue.id) {
        return { ...cvalue, color: true };
      } else {
        return { ...cvalue, color: false };
      }
    });
    // console.log(changedData);
    setData1(changedData);

    changedData?.map((val) => {
      if (id === val?.id) {
        return setCurrencyData(val?.currency);
      }
    });

    // setCurrencyData(newData);
    // console.log(newData, "Ram");
    // const updatedData = newData.map((currValues) => {

    // });
    // console.log(updatedData, "shyam");
  };

  const renderitems = (values) => {
    console.log(values, "arvind");
    return (
      <View>
        <View style={{ marginVertical: 20, marginLeft: 20, opacity: 0.7 }}>
          <TouchableOpacity>
            <Text
              style={
                values?.item?.color ? styles.textColor2 : styles.textColor1
              }
              onPress={() => press(values?.item?.id)}
            >
              {values?.item?.text}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const [selected, setSelected] = useState();
  // console.log(selected, "ram");
  // console.log("ram");

  const press1 = (id) => {
    // console.log(id, "ididdid");
    // console.log(currencyData, "currency");
    // const selectedData = [];
    currencyData?.map((cvalues) => {
      if (id === cvalues?.id) {
        // console.log(cvalues?.id, "cvalue");
        // console.log(cvalues?.extendData, "arvindhhhh");

        return setSelected(cvalues.extendData);
      }
      // return cvalues;
    });

    // const clicks = clickedData?.extendData?.map((vale) => {
    // console.log(vale, "arvindhhhh");
    // return vale;
    // });
    // console.log(clicks);

    // return (
    //   <FlatList
    //     data={selectedData}
    //     renderItem={({ item }) => {
    //       console.log(item);
    //       return <Text style={{ color: "white" }}>{item?.Change}</Text>;
    //     }}
    //   />
    // );
    // selectedFunction();
  };

  const renderitems1 = (values) => {
    // console.log(values, "kiri");

    return (
      <TouchableOpacity
        onPress={() => press1(values?.item?.id)}
        style={{ borderColor: "red", borderWidth: 1, marginLeft: 25 }}
      >
        <Text style={{ color: "white" }}>{values?.item?.currencyName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 25 }}>
        <View>
          <TextInput
            style={styles.textinputstyle}
            placeholder="Search for markets"
            placeholderTextColor={"gray"}
          />
          <Image
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              marginTop: 37,
              right: 45,
              opacity: 0.7,
            }}
            source={require("../assets/searchicon.png")}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Trending
          </Text>
        </View>
        <View>
          <FlatList data={data} renderItem={renderitem} horizontal />
        </View>
      </View>
      <View>
        <FlatList
          style={{ marginLeft: 5 }}
          data={data1}
          renderItem={renderitems}
          horizontal
        />
      </View>
      <View>
        <FlatList data={currencyData} renderItem={renderitems1} horizontal />
      </View>
      <View>
        <FlatList
          data={selected}
          renderItem={
            selectedFunction

            // return <Text style={{ color: "white" }}>{item?.Change}</Text>;
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060D1D",
  },
  textinputstyle: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    marginTop: 25,
    opacity: 0.7,
    borderRadius: 25,
    paddingLeft: 20,
  },
  new: {
    color: "#4ED46C",
    fontSize: 9,
  },
  imgstyle: {
    marginTop: 15,
    height: 14,
    width: 45,
    color: "green",
  },
  img1style: {
    marginTop: 15,
    height: 14,
    width: 45,
    color: "red",
  },
  textColor1: {
    color: "white",
    fontSize: 12,
    borderWidth: 2,
    borderColor: "red",
  },
  textColor2: {
    borderWidth: 2,
    borderColor: "red",

    color: "green",
    fontSize: 12,
  },
});
export default Market;

import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Home from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import Market from "./Market";
import Trades from "./Trades";
import Wallet from "./Wallet";
import Account from "./Account";
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const Bottomtab = () => {
  var activeHome = require("../assets/Groupactive.png");
  var inactiveHome = require("../assets/Groupinactive.png");
  var marketActive = require("../assets/marketactive.png");
  var marketInactive = require("../assets/marketinactive.png");
  var tradesInactive = require("../assets/tradesinactive.png");
  var tradesActive = require("../assets/tradesActive.png");
  var walletActive = require("../assets/walletactive.png");
  var walletInactive = require("../assets/walletinactive.png");
  var accountInactive = require("../assets/accountinactive.png");
  var accountActive = require("../assets/accountactive.png");
  return (
    //   <Tab.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //       tabBarStyle: {
    //         backgroundColor: "red",
    //         // height: 90,
    //       },
    //     }}
    //   >
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="Market" component={Market} />
    //   </Tab.Navigator>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? activeHome : inactiveHome} />
          ),
          tabBarStyle: { color: "red", backgroundColor: "#565656" },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? marketActive : marketInactive} />
          ),
          tabBarStyle: { color: "red", backgroundColor: "#565656" },
        }}
        name="Market"
        component={Market}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? tradesActive : tradesInactive} />
          ),
          tabBarStyle: { color: "red", backgroundColor: "#565656" },
        }}
        name="Trades"
        component={Trades}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? walletActive : walletInactive} />
          ),
          tabBarStyle: { color: "red", backgroundColor: "#565656" },
        }}
        name="Wallet"
        component={Wallet}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? accountActive : accountInactive} />
          ),
          tabBarStyle: { color: "red", backgroundColor: "#565656" },
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};
export default Bottomtab;

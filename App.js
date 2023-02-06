import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Firstui from "./Winexchange/Firstui";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginpage from "./Winexchange/Loginpage";
import Loginsignup from "./Winexchange/Loginsuignup";
import Forgotpassword from "./Winexchange/Forgotpassword";
import Verification from "./Winexchange/Verification";
import Signup from "./Winexchange/Signup";
// import Home from "./Winexchange/Home";
import Mobileverification from "./Winexchange/Mobileverification";
import Bottomtab from "./Winexchange/Bottomtab";
import Xyz from "./Winexchange/Xyz";
import Tabview from "./Winexchange/Tabview";
import SellScreen from "./Winexchange/SellScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Loginsignup"
          component={Loginsignup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Loginpage"
          component={Loginpage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Forgotpassword"
          component={Forgotpassword}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Verification"
          component={Verification}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Mobileverification"
          component={Mobileverification}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Xyz"
          component={Xyz}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Bottomtab"
          component={Bottomtab}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SellScreen"
          component={SellScreen}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Tabview"
          component={Tabview}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // // <View>
    // <Firstui />
    // // </View>
  );
};

export default App;

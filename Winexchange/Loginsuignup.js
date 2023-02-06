import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
// import React from "react";
import Loginpage from "./Loginpage";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useCallback, useEffect, useState } from "react";
SplashScreen.preventAutoHideAsync();

const Loginsignup = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <StatusBar
        animated={true}
        backgroundColor="#060D1D"
        hidden={false}
        barStyle="light-content"
      />
      <ImageBackground
        style={styles.container}
        source={require("../assets/Background.png")}
      >
        <View
          style={{
            height: Dimensions.get("window").height / 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={styles.logostyle}
            source={require("../assets/logoframe.png")}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "white",
              fontSize: 19,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Discover the easiest way to buy and
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 19,
              fontWeight: "bold",
            }}
          >
            sell crypto assets
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Loginpage")}
          style={{ alignItems: "center" }}
        >
          <LinearGradient
            style={styles.loginbutton}
            start={{ x: 0, y: 0 }}
            colors={["#1B75D0", "#6AD0FF"]}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 13,
              }}
            >
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: 25 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.signupbutton}
          >
            <Text
              style={{ color: "white", textAlign: "center", marginTop: 12 }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    // height: Dimensions.get("window").height / 1.1,
  },
  logostyle: {
    width: 205,
    height: 250,
    // top: 151,
    // left: 80,
  },
  loginbutton: {
    height: 50,
    // width: Dimensions.get("window").width / 1.1,

    borderRadius: 10,

    // style={{

    marginTop: 25,
    width: "86%",

    // }}
  },
  signupbutton: {
    height: 50,
    width: "86%",
    borderWidth: 1,
    borderColor: "#1B75D0",
    borderRadius: 10,
  },
});
export default Loginsignup;

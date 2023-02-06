import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Forgotpassword = ({ navigation }) => {
  const [email, setEmail] = useState();
  console.log(email);
  const navig = () => {
    navigation.navigate("Loginpage");
  };

  const nav = async () => {
    await fetch("https://backend-wv6m.onrender.com/api/auth/forget", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.JSON())
      .then((response) => {
        console.log(response);
      });
    navigation.navigate("Verification");
  };

  return (
    <View>
      <ImageBackground
        style={styles.imgback}
        source={require("../assets/Vector.png")}
      >
        <View style={styles.logoviewstyle}>
          <View
            style={{
              justifyContent: "flex-start",
              width: "87%",
              marginBottom: 30,
            }}
          >
            <TouchableOpacity onPress={navig}>
              <Image style={{}} source={require("../assets/backbutton.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.logostyle}
              source={require("../assets/loginframe.png")}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={{ fontSize: 35, color: "white", fontWeight: "500" }}>
              Forgot
            </Text>
            <Text style={{ fontSize: 35, color: "white", fontWeight: "500" }}>
              Password!
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 13,
                marginTop: 10,
                opacity: 0.6,
              }}
            >
              Enter your email, we will send you confirmation code
            </Text>
          </View>
          <View style={styles.textinputview}>
            <Image
              style={{
                width: 17,
                height: 24,
                resizeMode: "contain",
                // backgroundColor: "green",
              }}
              source={require("../assets/logoemail.png")}
            />
            <TextInput
              style={{ color: "white", paddingLeft: 25, width: "100%" }}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={"white"}
            />
          </View>
          <View>
            <TouchableOpacity onPress={nav} style={{ alignItems: "center" }}>
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
                  Submit
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  imgback: {
    height: "100%",
    width: "100%",
  },
  logostyle: {
    height: 65,
    width: 250,
    // marginTop: 40,
  },
  logoviewstyle: {
    height: Dimensions.get("window").height / 3,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
  },
  container: {
    marginHorizontal: 25,
  },
  textinputview: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginTop: 30,
    flexDirection: "row",
  },
  loginbutton: {
    height: 50,
    borderRadius: 10,
    marginTop: 70,
    width: "100%",
  },
});
export default Forgotpassword;

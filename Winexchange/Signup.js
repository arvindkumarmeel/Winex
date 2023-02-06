import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Signup = ({ navigation }) => {
  const [name, setName] = useState();

  const [organisationName, setOrganisationName] = useState();
  console.log(organisationName);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [country, setCountry] = useState();

  const navies = async () => {
    await fetch("https://backend-wv6m.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        organisationName,
        email,
        password,
        country,
      }),
    })
      .then((response) => response.JSON())
      .then((response) => {
        console.log(response, "arvind");
      });
    navigation.navigate("Mobileverification");
  };

  return (
    <View>
      <ImageBackground
        style={styles.imgback}
        source={require("../assets/Vector.png")}
      >
        <View style={styles.logoviewstyle}>
          <View>
            <Image
              style={styles.logostyle}
              source={require("../assets/loginframe.png")}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={{ fontSize: 35, color: "white", fontWeight: "450" }}>
              Sign up
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                marginTop: 10,
                opacity: 0.6,
              }}
            >
              Please enter detail to create account
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "white",
              marginTop: 40,
              flexDirection: "row",
              opacity: 0.7,
            }}
          >
            <Image
              style={{ height: 15, width: 15, marginTop: 5 }}
              source={require("../assets/user.png")}
            />
            <TextInput
              style={{
                paddingLeft: 30,
                width: "100%",
                marginBottom: 3,
                opacity: 0.3,
                color: "white",
              }}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor={"#fff"}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "white",
              marginTop: 30,
              flexDirection: "row",
              opacity: 0.7,
            }}
          >
            <Image
              style={{ height: 15, width: 15, marginTop: 5 }}
              source={require("../assets/logoemail.png")}
            />
            <TextInput
              style={{
                paddingLeft: 30,
                width: "100%",
                marginBottom: 3,
                opacity: 0.3,
                color: "white",
              }}
              onChangeText={setEmail}
              placeholder="Enter your Email"
              placeholderTextColor={"#fff"}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "white",
              marginTop: 30,
              flexDirection: "row",
              opacity: 0.7,
              color: "white",
            }}
          >
            <Image
              style={{ height: 15, width: 15, marginTop: 5 }}
              source={require("../assets/telephone.png")}
            />
            <TextInput
              style={{
                paddingLeft: 30,
                width: "100%",
                marginBottom: 3,
                opacity: 0.3,
                color: "white",
              }}
              onChangeText={setOrganisationName}
              placeholder="Enter your mobile number"
              placeholderTextColor={"#fff"}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "white",
              marginTop: 30,
              flexDirection: "row",
              opacity: 0.7,
              position: "relative",
              justifyContent: "flex-end",
            }}
          >
            <Image
              style={{ height: 15, width: 15, marginTop: 5, left: 15 }}
              source={require("../assets/padlock.png")}
            />
            <TextInput
              style={{
                paddingLeft: 30,
                width: "100%",
                marginBottom: 3,
                opacity: 0.3,
                color: "white",
              }}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor={"#fff"}
            />
            <Image
              style={{
                height: 15,
                width: 15,
                marginTop: 5,
                position: "absolute",
              }}
              source={require("../assets/view.png")}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "white",
              marginTop: 30,
              flexDirection: "row",
              opacity: 0.7,
              position: "relative",
              justifyContent: "flex-end",
            }}
          >
            <Image
              style={{ height: 15, width: 15, marginTop: 5, left: 15 }}
              source={require("../assets/padlock.png")}
            />
            <TextInput
              style={{
                paddingLeft: 30,
                width: "100%",
                marginBottom: 3,
                opacity: 0.3,
              }}
              onChangeText={setCountry}
              placeholder="Confirm your password"
              placeholderTextColor={"#fff"}
            />
            <Image
              style={{
                height: 15,
                width: 15,
                marginTop: 5,
                position: "absolute",
              }}
              source={require("../assets/view.png")}
            />
          </View>
          <View>
            <TouchableOpacity onPress={navies} style={{ alignItems: "center" }}>
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
                  Signup
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ color: "white" }}>Already have an accoount? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Loginpage")}>
              <Text style={{ color: "#56BAF3" }}>Login Account</Text>
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
  logoviewstyle: {
    height: Dimensions.get("window").height / 4,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "",
    // flexDirection: "row",
  },
  logostyle: {
    height: 65,
    width: 250,
    marginTop: 30,
  },
  container: {
    marginHorizontal: 25,
  },
  loginbutton: {
    height: 50,
    borderRadius: 10,
    marginTop: 0,
    width: "100%",
    marginTop: 50,
  },
});
export default Signup;

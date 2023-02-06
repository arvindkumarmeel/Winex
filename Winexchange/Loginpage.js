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
  Linking,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import imag from "../assets/loadingImage.gif";

const Loginpage = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [response, setResponse] = useState(false);
  // console.log(password, "password");
  // console.log(email, "email");
  const onpress = () => {
    Linking.openURL("https://www.google.com/");
  };
  const onpress1 = () => {
    Linking.openURL("https://www.apple.com/in/");
  };

  const navi = () => {
    navigation.navigate("Forgotpassword");
  };

  const naviga = async () => {
    setResponse(true);
    await fetch("https://backend-wv6m.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "hello");
        res.success === true && navigation.navigate("Bottomtab");
        setResponse(false);
        res.success === true &&
          ToastAndroid.show("Login successfully!", ToastAndroid.SHORT);
        res.success === false &&
          ToastAndroid.show(
            "Email and password are incorrect",
            ToastAndroid.SHORT
          );
      });
  };

  return (
    <ImageBackground
      style={styles.backgroundimg}
      source={require("../assets/Vector.png")}
    >
      <View style={styles.logoviewstyle}>
        <Image
          style={styles.logostyle}
          source={require("../assets/loginframe.png")}
        />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 35, color: "white", fontWeight: "500" }}>
            Welcome
          </Text>
          <Text style={{ fontSize: 35, color: "white", fontWeight: "500" }}>
            Back!
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
            Please login to your account
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
            placeholder="Enter your email"
            placeholderTextColor={"white"}
            onChangeText={setEmail}
          />
        </View>
        <View style={[styles.textinputview, { position: "relative" }]}>
          <Image
            style={{ width: 17, height: 24, resizeMode: "contain" }}
            source={require("../assets/padlock.png")}
          />
          <TextInput
            style={{ color: "white", paddingLeft: 25, width: "100%" }}
            placeholder="Enter your password"
            placeholderTextColor={"white"}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Image
            style={{
              height: 16,
              width: 16,
              position: "absolute",
              right: 3,
              top: 5,
            }}
            source={require("../assets/view.png")}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity onPress={navi}>
            <Text style={{ color: "white", alignSelf: "flex-end" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={naviga} style={{ alignItems: "center" }}>
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
        </View>
        {response && (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={imag}
              style={{
                height: 40,
                width: 40,
              }}
            />
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            marginVertical: 30,
            // marginHorizontal: -30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../assets/Rectangle29.png")} />
          <Text
            style={{
              color: "white",
              fontSize: 12,
              // marginTop: -7,
              paddingHorizontal: 10,
            }}
          >
            or sign in with
          </Text>
          <Image source={require("../assets/Rectangle30.png")} />
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={onpress} style={styles.signupbutton}>
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/Google.png")}
            />
            <Text
              style={{ color: "white", textAlign: "center", paddingLeft: 10 }}
            >
              Sign in with google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={onpress1} style={styles.signupbutton}>
            <Image
              style={{ height: 20, width: 20, resizeMode: "contain" }}
              source={require("../assets/Apple.png")}
            />
            <Text
              style={{ color: "white", textAlign: "center", paddingLeft: 10 }}
            >
              Sign in with apple
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 25,
          }}
        >
          <Text style={{ color: "white" }}>Not register yet ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#56BAF3" }}> Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundimg: {
    height: "100%",
    width: "100%",
    // height: Dimensions.get("window").height / 1,
  },
  logostyle: {
    height: 65,
    width: 250,
    marginTop: 30,
  },
  logoviewstyle: {
    height: Dimensions.get("window").height / 4,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginHorizontal: 25,
  },
  textinputview: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginTop: 20,
    flexDirection: "row",
  },
  loginbutton: {
    height: 50,
    borderRadius: 10,
    marginTop: 25,
    width: "100%",
  },
  signupbutton: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#1B75D0",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
export default Loginpage;

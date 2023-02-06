import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Navigation } from "react-native-navigation";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const Verification = ({ navigation }) => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgotpassword")}
            >
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
            <Text style={{ fontSize: 35, color: "white", fontWeight: "450" }}>
              Enter
            </Text>
            <Text style={{ fontSize: 35, color: "white", fontWeight: "450" }}>
              Verification Code
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
              Enter otp that have sent to your email id
            </Text>
          </View>
          <View>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 60,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Didn't recive the code ?
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#62C7FA" }}> Resend OTP</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              // onPress={() => navigation.navigate("Verification")}
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
                  Confirm OTP
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
  codeFieldRoot: { marginTop: 50 },
  cell: {
    width: Dimensions.get("window").width / 8,
    height: Dimensions.get("window").height / 15,
    lineHeight: 38,
    fontSize: 24,
    // borderWidth: 2,
    borderColor: "white",
    textAlign: "center",
    color: "white",
    backgroundColor: "#36454F",
    borderRadius: 10,
  },
  focusCell: {
    borderColor: "#000",
  },
  loginbutton: {
    height: 50,
    borderRadius: 10,
    marginTop: 0,
    width: "100%",
  },
});
export default Verification;

import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";

const Modals = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setModalOpen(!props.setModalOpen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{ alignSelf: "center" }}
              source={require("../assets/checkimage.png")}
            />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                marginTop: 15,
                // padding: 35,
              }}
            >
              Order Created Successfully
            </Text>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginTop: 30,
                  opacity: 0.7,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Quantity</Text>
                <Text style={{ color: "white", fontSize: 12 }}>0.00</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginTop: 7,
                  opacity: 0.7,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>TDS</Text>
                <Text style={{ color: "white", fontSize: 12 }}>0.00</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginTop: 7,
                  opacity: 0.7,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Fee</Text>
                <Text style={{ color: "white", fontSize: 12 }}>0.00</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginTop: 7,
                  opacity: 0.7,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Total</Text>
                <Text style={{ color: "white", fontSize: 12 }}>0.00</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 7.5,
                    color: "white",
                    textAlign: "center",
                    marginTop: 8,
                  }}
                >
                  Fee: Maker: 0.2% l Taker: 0.2% l TDS: 1.0% l Incl. of all
                  applicable taxes
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalOpen(!props.modalOpen)}
            >
              <View
                style={{
                  height: 42,
                  width: 52,
                  backgroundColor: "#8F00FF",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 20,
                  borderRadius: 4,
                }}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#293440",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 360,
    width: 315,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

export default Modals;

import React, { useState } from "react";
import { Picker } from "@react-native-community/picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Pickers = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { oldValue, onChange, editable } = props;
  return (
    <>
      {Platform.OS === "ios" ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  setModelOpen(false);

                  //setOpenTimePicker(false);
                }}
                style={{ alignSelf: "flex-end" }}
              >
                <Text>
                  <FontAwesome5 name={"times-circle"} size={26} />
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              ></View>
              <Picker
                selectedValue={selectedValue || oldValue}
                style={{ height: 50, width: 400 }}
                onValueChange={(itemValue, itemIndex) => {
                  console.log(itemValue);
                  setSelectedValue(itemValue);
                }}
              >
                <Picker.Item label="Select One" value="" key="1" />
                <Picker.Item label="Male" value="Male" key="2" />
                <Picker.Item label="Female" value="Female" key="3" />
                <Picker.Item label="Other" value="Other" key="4" />
              </Picker>
              <TouchableOpacity
                style={{
                  height: 40,
                  borderRadius: 20,
                  width: "50%",
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setModelOpen(false);
                  //  setOpenTimePicker(false);
                  sendingData_Crying();
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#ffff",
                    }}
                  >
                    Save
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        <Picker
          selectedValue={selectedValue || oldValue}
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue);
            setSelectedValue(itemValue);
          }}
        >
          <Picker.Item label="Select One" value="" key="1" />
          <Picker.Item label="Male" value="Male" key="2" />
          <Picker.Item label="Female" value="Female" key="3" />
          <Picker.Item label="Other" value="Other" key="4" />
        </Picker>
      )}
    </>
  );
};

export default Pickers;

const styles = StyleSheet.create({
  upperCenteredView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    // flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
    height: "100%",
  },
  modalView: {
    margin: 150,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    width: "70%",
    opacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowColor: "black",

    shadowRadius: 4,
    elevation: 5,
  },
  cameraView: {
    height: 40,
    width: 40,
    backgroundColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  slider: {
    marginVertical: 10,
    color: "red",
    width: "100%",
  },
});

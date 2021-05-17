import React, { useState } from "react";
import { Picker } from "@react-native-community/picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
const Pickers = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { oldValue, onChange, editable, setGenderOpen, genderOpen } = props;
  return (
    <>
      {Platform.OS === "ios" && genderOpen && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={genderOpen}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  setGenderOpen(false);

                  //setOpenTimePicker(false);
                }}
                style={{ alignSelf: "flex-end" }}
              >
                <Text>
                  <FontAwesome5 name={"times-circle"} size={26} />
                </Text>
              </TouchableOpacity>

              <Picker
                selectedValue={selectedValue || oldValue}
                style={{ height: 150, width: 400 }}
                enabled={editable}
                onValueChange={(itemValue, itemIndex) => {
                  console.log(itemValue);
                  setSelectedValue(itemValue);
                  onChange(itemValue);
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setGenderOpen(false);
                  //  setOpenTimePicker(false);
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
      )}
      {Platform.OS !== "ios" && (
        <Picker
          selectedValue={selectedValue || oldValue}
          enabled={editable}
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue);
            setSelectedValue(itemValue);
            onChange(itemValue);
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
  centeredView: {
    // flex: 1,
    //display: "flex",
    // justifyContent: "center",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    bottom: 0,
    backgroundColor: "#00000099",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    width: "100%",
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

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

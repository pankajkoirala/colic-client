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
            <View style={{ backgroundColor: "white" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setGenderOpen(false);

                    //setOpenTimePicker(false);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "blue",
                      padding: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setGenderOpen(false);

                    //setOpenTimePicker(false);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "blue",
                      padding: 5,
                    }}
                  >
                    Confirm
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalView}>
                <Picker
                  selectedValue={selectedValue || oldValue}
                  style={{ height: 200, width: 400 }}
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
              </View>
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
    paddingTop: "120%",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    //backgroundColor: "#00000099",
    height: "100%",
  },
  modalView: {
    //backgroundColor: "white",
    padding: 15,
    alignItems: "center",
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

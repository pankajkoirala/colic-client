import React, { useEffect, useState } from "react";
import DatePicker from "./../../../common/ModelDateInsert/datePicker";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Slider from "@react-native-community/slider";
import moment from "moment";
const ProfileUploader = (props) => {
  const {
    setModelOpen,
    modelOpen,
    fromHours,
    setFromHours,
    toHours,
    setToHours,
    intensity,
    setIntensity,
    openTimePicker1,
    setOpenTimePicker1,
    openTimePicker2,
    setOpenTimePicker2,
    sendingData_Crying,
    loaderIsOpen,
  } = props;

  return (
    <View style={styles.upperCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modelOpen}
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
            >
              <View>
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  Starting Time
                </Text>
                <TouchableOpacity
                  onPress={() => setOpenTimePicker1(true)}
                  style={{
                    height: 40,
                    width: 100,
                    borderColor: "black",
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 6,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {moment(fromHours).format("hh:mm A")}
                  </Text>
                  <DatePicker
                    mode={"time"}
                    openTimePicker={openTimePicker1}
                    setOpenTimePicker={setOpenTimePicker1}
                    setHours={setFromHours}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  End Time
                </Text>
                <TouchableOpacity
                  onPress={() => setOpenTimePicker2(true)}
                  style={{
                    height: 40,
                    width: 100,
                    borderColor: "black",
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 6,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {moment(toHours).format("hh:mm A")}
                  </Text>
                  <DatePicker
                    openTimePicker={openTimePicker2}
                    setOpenTimePicker={setOpenTimePicker2}
                    mode={"time"}
                    setHours={setToHours}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: -12,
                }}
              >
                Intensity
              </Text>
              <Slider
                minimumValue={0}
                maximumValue={5}
                minimumTrackTintColor="blue"
                step={1}
                onValueChange={(value) => setIntensity(value)}
                style={styles.slider}
                thumbTintColor="#00000099"
              />
            </View>
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
    </View>
  );
};

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

export default ProfileUploader;

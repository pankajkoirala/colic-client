import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5, { FA5Style } from "react-native-vector-icons/FontAwesome5";
const ProfileUploader = (props) => {
  const { setModelOpen, openTimePicker, setOpenTimePicker, setHours, mode } =
    props;

  const [date, setDate] = useState(new Date());
  //const [show, setShow] = useState(true);

  useEffect(() => {
    //setFinalSelectedDate(moment(date).format("YYYY-MM-DD"));
  }, [date]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (setHours) {
      setHours(selectedDate);
    }
  };

  const showMode = (currentMode) => {
    //setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.upperCenteredView}>
      {Platform.OS === "ios" && openTimePicker ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={openTimePicker}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => setOpenTimePicker(false)}
                style={{ alignSelf: "flex-end" }}
              >
                <Text>
                  <FontAwesome5 name={"times-circle"} size={26} />
                </Text>
              </TouchableOpacity>
              {/*model component*/}
              <View style={{ width: "100%" }}>
                <Text></Text>
                <View style={{ width: "100%" }}>
                  {openTimePicker && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={false}
                      display="default"
                      onChange={onChange}
                      textColor="black"
                    />
                  )}
                </View>
              </View>
              {/*model component*/}

              <TouchableOpacity
                style={{
                  height: 40,
                  borderRadius: 20,
                  width: "50%",
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 4,
                }}
                onPress={() => {
                  setOpenTimePicker(false);
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#ffff",
                    }}
                  >
                    ok
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        <View style={{ width: "100%" }}>
          {openTimePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
              textColor="black"
            />
          )}
        </View>
      )}
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
    borderRadius: 4,
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

/*import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  View,
  Button,
  Platform,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

export default DatePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const { setFinalSelectedDate, showDateMode } = props;

  useEffect(() => {
    setFinalSelectedDate(moment(date).format("YYYY-MM-DD"));
  }, [date]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.upperCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => setShow(false)}
            style={{ alignSelf: "flex-end" }}
          >
            <Text>
              <FontAwesome5 name={"times-circle"} size={26} />
            </Text>
          </TouchableOpacity>

          <View style={{ width: "100%" }}>
            {Platform.OS === "ios" && show == true ? (
              <TouchableOpacity
                style={{ alignItems: "flex-end", marginRight: 4 }}
                onPress={() => setShow(false)}
              >
                <Text> close</Text>
              </TouchableOpacity>
            ) : null}
            <View style={{ width: "100%", backgroundColor: "red" }}>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={"time"}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
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
                setShow(false);
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#ffff",
                  }}
                >
                  ok
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
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
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
});*/

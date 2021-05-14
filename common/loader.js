import React, { useState } from "react";

import { Modal, StyleSheet, View, ActivityIndicator } from "react-native";
import FontAwesome5, { FA5Style } from "react-native-vector-icons/FontAwesome5";
const ProfileUploader = (props) => {
  const { setModelOpen, loaderIsOpen, setHours, mode } = props;

  return (
    <View style={styles.upperCenteredView}>
      <Modal animationType="fade" transparent={true} visible={loaderIsOpen}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator
              animating={loaderIsOpen}
              style={styles.loaderSpinner}
              size="large"
            />
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
});

export default ProfileUploader;

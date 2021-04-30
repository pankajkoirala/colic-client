import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import noImage from "./../assets/noImage.jpg";

const ProfileUploader = (props) => {
  const { image, setImage, ImageUploadFunction } = props;
  const [modalVisible, setModalVisible] = useState(false);

  async function _pickUserImage(setUserImage) {
    let result = await DocumentPicker.getDocumentAsync({});
    // alert(result.type);
    // console.log(result);
    setUserImage(result);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{ alignSelf: "flex-end" }}
            >
              <Text>
                <FontAwesome5 name={"times-circle"} size={35} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                source={image?.uri ? image : noImage}
                style={{
                  height: 200,
                  width: 200,
                  borderColor: "black",
                  borderRadius: 100,
                  borderWidth: 2,
                }}
              />
              <TouchableOpacity
                onPress={() => _pickUserImage(setImage)}
                style={{
                  height: 40,
                  width: "70%",
                  margin: 20,
                  backgroundColor: "#2196F3",
                  borderRadius: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>select image</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                borderRadius: 20,
                width: "100%",
                backgroundColor: "#2196F3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                ImageUploadFunction();
              }}
            >
              <View>
                <Text>Update</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.cameraView}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome5 name="camera" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 150,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    width: "70%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
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
});

export default ProfileUploader;

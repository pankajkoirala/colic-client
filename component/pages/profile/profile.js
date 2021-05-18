import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import moment from "moment";
import ImageImportModel from "./../../../common/profileUploadModul";
import GenderPicker from "./../../../common/genderPicker";

import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import DateInsert from "../../../common/dateInsert";
import { base_URL } from "../../utils/const";
import profileImageBG from "./../../../assets/profileBGimage.jpg";

function Profile(props) {
  const {
    handleSubmit,
    control,
    errors,
    onSubmit,
    setEditState,
    editState,
    profileDetail,
    ImageUploadFunction,
    profileImage,
    loader,
    setProfileImage,
  } = props;
  const [genderOpen, setGenderOpen] = useState(false);
  return (
    <ScrollView style={styles.profileContainer} bounces={false}>
      <View style={styles.fullPageView}>
        <ImageBackground
          source={profileImageBG}
          imageStyle={{
            resizeMode: "cover",
          }}
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              height: "35%",
            }}
          >
            <View style={styles.editBack}>
              <FontAwesome5
                onPress={() => props.navigation.goBack()}
                name={"arrow-left"}
                size={25}
              />
              <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text style={styles.editText}>
                  {editState === true ? "Save" : "Edit"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.profileImgView}>
              <Image
                source={{
                  uri: `${base_URL}/${profileDetail.profileimage}`,
                }}
                style={styles.profileImg}
              />
            </View>

            <View style={styles.imageUploadEditIcon}>
              <ImageImportModel
                image={profileImage}
                setImage={setProfileImage}
                ImageUploadFunction={ImageUploadFunction}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.formView}>
          <View style={styles.inputView}>
            <Text>FullName</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputInnerView}>
                  <TextInput
                    editable={editState}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    style={{ height: 30 }}
                  />
                  {errors.name && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              name="name"
              rules={{ required: true }}
              defaultValue=" no name"
            />
          </View>
          <View style={styles.inputView}>
            <Text>Username</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputInnerView}>
                  <TextInput
                    editable={false}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    style={{ height: 30 }}
                  />
                  {errors.username && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              name="username"
              rules={{ required: true }}
              defaultValue=""
            />
          </View>
          <View style={styles.inputView}>
            <Text>Email</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputInnerView}>
                  <TextInput
                    onBlur={onBlur}
                    editable={false}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    style={{ height: 30 }}
                  />
                  {errors.email && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              name="email"
              rules={{
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }}
              defaultValue=""
            />
          </View>
          <View style={styles.inputView}>
            <Text>date of birth</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputInnerView}>
                  <DateInsert
                    editable={editState}
                    onChange={onChange}
                    value={profileDetail.dateofbirth}
                  />
                  {errors.dateofbirth && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              name="dateofbirth"
              rules={
                {
                  // required: true,
                }
              }
              defaultValue=""
            />
          </View>
          <View style={styles.inputView}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View
                  style={
                    Platform.OS === "ios"
                      ? styles.genderPickerIOS
                      : styles.genderPicker
                  }
                >
                  {Platform.OS === "ios" && (
                    <TouchableOpacity
                      disabled={!editState}
                      onPress={() => setGenderOpen(true)}
                    >
                      <Text>{value || profileDetail.gender}</Text>
                    </TouchableOpacity>
                  )}
                  <GenderPicker
                    setGenderOpen={setGenderOpen}
                    genderOpen={genderOpen}
                    onChange={onChange}
                    oldValue={profileDetail.gender}
                    editable={editState}
                  />
                </View>
              )}
              name="gender"
              rules={{
                required: true,
              }}
              defaultValue="no gender"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    // backgroundColor: "grey",
  },
  fullPageView: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  editBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  editText: {
    fontSize: 25,
  },
  profileImgView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    height: 160,
    width: 160,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
  },
  imageUploadEditIcon: {
    left: 0,
    marginTop: -40,
    marginRight: -110,
  },
  inputView: {
    width: "80%",
    paddingVertical: 15,
  },
  formView: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: 500,
    paddingTop: 10,
    backgroundColor: "white",
  },
  inputInnerView: {
    borderColor: "black",
    borderBottomWidth: 2,
    height: 30,
  },
  genderPickerIOS: {
    borderColor: "black",
    borderBottomWidth: 2,
    height: 30,
  },
  genderPicker: {
    borderColor: "black",
    borderBottomWidth: 2,
    height: 50,
  },
  errorMessage: {
    color: "red",
  },

  loaderSpinner: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

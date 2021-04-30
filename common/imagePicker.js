import React from "react";
import { View, Text, TextInput } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Controller } from "react-hook-form";

// Picking User Image From Document Picker
async function _pickUserImage(setUserImage) {
  let result = await DocumentPicker.getDocumentAsync({});
  // alert(result.type);
  // console.log(result);
  setUserImage(result);
}

export default function ImageInput(props) {
  const {
    containerstyle,
    inputStyle,
    errors,
    control,
    placeholder,
    name,
    type,
  } = props;

  return (
    <View
      style={{
        height: 30,
        width: "25%",
        backgroundColor: "red",
        borderRadius: 5,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Text
            style={{ color: "white" }}
            onPress={() => _pickUserImage(onChange)}
          >
            image picker
          </Text>
        )}
        name={name}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.name && <Text style={{color:'red'}}>This is required.</Text>}
    </View>
  );
}

{/* <ImageInput control={control} name={"image"} errors={errors} /> */}

import React from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export default function CommonInput(props) {
  const {
    containerStyle,
    inputStyle,
    labelStyle,
    errors,
    control,
    placeholder,
    name,
    type,
    label,
    setError,
    errorMessage,
  } = props;
  console.log("🚀 ~ file: input.js ~ line 18 ~ CommonInput ~ errors", errors);
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => {
              setError(name, {
                type: "manual",
                message: errorMessage,
              });
              onChange(value);
            }}
            value={value}
            placeholder={placeholder}
            style={inputStyle}
            keyboardType={type === "numeric" ? "numeric" : "default"}
            secureTextEntry={type === "password"}
          />
        )}
        name={name}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.username && <Text>{errors.username.message + "aaijahau"}</Text>}
    </View>
  );
}

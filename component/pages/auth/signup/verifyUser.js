import React, { useState, useRef, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { activateUser } from "../../../service/authService";

export default VerifyUser = (props) => {
  const ref_OTP1 = useRef();
  const ref_OTP2 = useRef();
  const ref_OTP3 = useRef();
  const ref_OTP4 = useRef();
  const ref_OTP5 = useRef();
  const ref_OTP6 = useRef();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    activateUser(data, props);
  };

  return (
    <View style={styles.verifyUserContainer}>
      <View style={styles.colicIcon}>
        <Text style={styles.colicIconText}>COLIC</Text>
      </View>
      <View style={styles.OTPInnerContainer}>
        <Text style={styles.enterOTP}>Enter OTP</Text>
        <View style={styles.OTPInputView}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextInput
                  style={styles.inputField}
                  onBlur={onBlur}
                  maxLength={1}
                  keyboardType="number-pad"
                  numberOfLines={1}
                  onChangeText={(value) => {
                    onChange(value);
                    if (value.length === 1) {
                      ref_OTP2.current.focus();
                    }
                  }}
                  value={value}
                  returnKeyType="next"
                  ref={ref_OTP1}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
            )}
            name="firstOTP"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextInput
                  style={styles.inputField}
                  onBlur={onBlur}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={(value) => {
                    onChange(value);
                    if (value.length === 1) {
                      ref_OTP3.current.focus();
                    } else {
                      ref_OTP1.current.focus();
                    }
                  }}
                  value={value}
                  returnKeyType="next"
                  ref={ref_OTP2}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
            )}
            name="secondOTP"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextInput
                  style={styles.inputField}
                  onBlur={onBlur}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={(value) => {
                    onChange(value);
                    if (value.length === 1) {
                      ref_OTP4.current.focus();
                    } else {
                      ref_OTP2.current.focus();
                    }
                  }}
                  value={value}
                  ref={ref_OTP3}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
            )}
            name="thirdOTP"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextInput
                  style={styles.inputField}
                  onBlur={onBlur}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={(value) => {
                    onChange(value);
                    if (value.length === 1) {
                      ref_OTP5.current.focus();
                    } else {
                      ref_OTP3.current.focus();
                    }
                  }}
                  value={value}
                  ref={ref_OTP4}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
            )}
            name="forthOTP"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextInput
                  style={styles.inputField}
                  onBlur={onBlur}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={(value) => {
                    onChange(value);
                    if (value.length === 1) {
                      ref_OTP6.current.focus();
                    } else {
                      ref_OTP4.current.focus();
                    }
                  }}
                  value={value}
                  ref={ref_OTP5}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
            )}
            name="fifthOTP"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextInput
                  style={styles.inputField}
                  onBlur={onBlur}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={(value) => {
                    onChange(value);
                    if (value.length !== 1) {
                      ref_OTP5.current.focus();
                    }
                  }}
                  value={value}
                  ref={ref_OTP6}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
            )}
            name="sixthOTP"
            rules={{ required: true }}
            defaultValue=""
          />
        </View>
        <View style={styles.sendButtonWrapper}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.sendButtonView}
          >
            <Text style={styles.sendButton}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  verifyUserContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ffad33",
    alignItems: "center",
  },
  colicIcon: {
    marginVertical: 50,
  },
  colicIconText: {
    fontSize: 45,
    alignSelf: "center",
    color: "white",
  },
  OTPInnerContainer: {
    backgroundColor: "#ffd699",
    height: "50%",
    width: "85%",
    paddingTop: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  enterOTP: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    marginVertical: 20,
  },
  OTPInputView: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  inputField: {
    height: 50,
    width: 50,
    alignItems: "center",
    margin: 2,
    padding: 4,
    textAlign: "center",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 40,
    borderColor: "black",
    borderWidth: 2,
  },
  sendButtonWrapper: {
    paddingTop: 50,
    alignSelf: "center",
  },
  sendButtonView: {
    backgroundColor: "black",
    height: 50,
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    fontSize: 30,
    display: "flex",
    color: "white",
  },
});

import React, { useState, useRef, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { errorAlert } from "../../../../common/alert";
import { forgetPWVerifyUser, resendOTP } from "../../../service/authService";
import Loader from "./../../../../common/loader";

export default VerifyUser = (props) => {
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);
  const [otp1, setOtp1] = useState(null);
  const [otp2, setOtp2] = useState(null);
  const [otp3, setOtp3] = useState(null);
  const [otp4, setOtp4] = useState(null);
  const [otp5, setOtp5] = useState(null);
  const [otp6, setOtp6] = useState(null);

  const setLoaderOff = () => {
    setLoaderIsOpen(false);
  };

  const ref_OTP1 = useRef();
  const ref_OTP2 = useRef();
  const ref_OTP3 = useRef();
  const ref_OTP4 = useRef();
  const ref_OTP5 = useRef();
  const ref_OTP6 = useRef();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoaderIsOpen(true);
    let OTP = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    console.log(OTP);
    let sendingData = {
      OTP: OTP,
      usernameEmail: props.route.params.data.usernameEmail,
    };
    console.log(
      "🚀 ~ file: forgetPWVarifyngUser.js ~ line 45 ~ onSubmit ~ sendingData",
      sendingData
    );
    if (!otp1 || !otp2 || !otp3 || !otp4 || !otp5 || !otp6) {
      errorAlert("OTP must Contain Enght Digits");
    } else {
      forgetPWVerifyUser(sendingData, props, setLoaderOff);
    }
  };

  const setOtpValues = (values) => {
    let p = values?.split("");
    if (p.length === 6) {
      setOtp1(p && p[0]);
      setOtp2(p && p[1]);
      setOtp3(p && p[2]);
      setOtp4(p && p[3]);
      setOtp5(p && p[4]);
      setOtp6(p && p[5]);
    }
  };
  console.log(errors);
  return (
    <>
      <View style={styles.verifyUserContainer}>
        <Loader loaderIsOpen={loaderIsOpen} />

        <View style={styles.colicIcon}>
          <Text style={styles.colicIconText}>COLIC</Text>
        </View>
        <View style={styles.OTPInnerContainer}>
          <Text style={styles.enterOTP}>Enter OTP</Text>
          <View style={styles.OTPInputView}>
            <View>
              <TextInput
                style={styles.inputField}
                keyboardType="number-pad"
                numberOfLines={1}
                onChangeText={(e) => {
                  setOtp1(e);
                  setOtpValues(e);

                  if (e.length === 1) {
                    ref_OTP2.current.focus();
                  } else if (!e) {
                    setOtp1(null);
                  }
                }}
                value={otp1}
                returnKeyType="next"
                ref={ref_OTP1}
              />
            </View>

            <View>
              <TextInput
                style={styles.inputField}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(e) => {
                  setOtp2(e);
                  if (e.length === 1) {
                    ref_OTP3.current.focus();
                  } else {
                    ref_OTP1.current.focus();
                  }
                  if (!e) {
                    setOtp2(null);
                  }
                }}
                value={otp2}
                returnKeyType="next"
                ref={ref_OTP2}
              />
            </View>

            <View>
              <TextInput
                style={styles.inputField}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(e) => {
                  setOtp3(e);

                  if (e.length === 1) {
                    ref_OTP4.current.focus();
                  } else {
                    ref_OTP2.current.focus();
                  }
                  if (!e) {
                    setOtp3(null);
                  }
                }}
                value={otp3}
                ref={ref_OTP3}
              />
            </View>

            <View>
              <TextInput
                style={styles.inputField}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(e) => {
                  setOtp4(e);

                  if (e.length === 1) {
                    ref_OTP5.current.focus();
                  } else {
                    ref_OTP3.current.focus();
                  }
                  if (!e) {
                    setOtp4(null);
                  }
                }}
                value={otp4}
                ref={ref_OTP4}
              />
            </View>

            <View>
              <TextInput
                maxLength={1}
                style={styles.inputField}
                keyboardType="number-pad"
                onChangeText={(e) => {
                  setOtp5(e);

                  if (e.length === 1) {
                    ref_OTP6.current.focus();
                  } else {
                    ref_OTP4.current.focus();
                  }
                  if (!e) {
                    setOtp5(null);
                  }
                }}
                value={otp5}
                ref={ref_OTP5}
              />
            </View>

            <View>
              <TextInput
                style={styles.inputField}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(e) => {
                  setOtp6(e);

                  if (e.length !== 1) {
                    ref_OTP5.current.focus();
                  }
                  if (!e) {
                    setOtp6(null);
                  }
                }}
                value={otp6}
                ref={ref_OTP6}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() =>
              resendOTP({
                usernameEmail: props.route.params.data.usernameEmail,
              })
            }
          >
            <Text style={{ fontSize: 18 }}>Resend OTP? </Text>
          </TouchableOpacity>
          <View style={styles.sendButtonWrapper}>
            <TouchableOpacity
              onPress={() => onSubmit()}
              style={styles.sendButtonView}
            >
              <Text style={styles.sendButton}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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
    height: 45,
    width: 45,
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
    paddingTop: 30,
    alignSelf: "center",
  },
  sendButtonView: {
    backgroundColor: "black",
    height: 50,
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  sendButton: {
    fontSize: 30,
    display: "flex",
    color: "white",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Loader from "./../../../../common/loader";
import { errorAlert } from "../../../../common/alert";
import { forgetPWchangePW } from "../../../service/authService";
import { ScrollView } from "react-native-gesture-handler";

export default function ForgetPW(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);

  const setLoaderOff = () => {
    setLoaderIsOpen(false);
  };

  const onSubmit = () => {
    if (password.length < 8) {
      errorAlert("Password Must Contain 8 Character");
    } else if (password !== confirmPassword) {
      errorAlert("Password Does Not Match");
    } else {
      setLoaderIsOpen(true);
      forgetPWchangePW(
        {
          password: password,
          usernameEmail: props?.route?.params?.data.usernameEmail,
        },
        props,
        setLoaderOff
      );
    }
  };

  return (
    <>
      <ScrollView bounces={false} style={styles.pageContainer}>
        <Loader loaderIsOpen={loaderIsOpen} />
        <View>
          <View style={styles.colicIcon}>
            <Text
              onPress={() => props.navigation.navigate("signupPage")}
              style={styles.colicIconText}
            >
              COLIC
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: "80%",
              alignSelf: "center",
              marginTop: -20,
            }}
          >
            <View
              style={{
                marginVertical: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  paddingBottom: 20,
                  fontSize: 18,
                }}
              >
                Password
              </Text>
              <TextInput
                textAlign="center"
                style={styles.input_item_place}
                onChangeText={(value) => setPassword(value)}
                value={password}
                secureTextEntry={true}
              />
            </View>
            <View
              style={{
                marginVertical: 4,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  paddingBottom: 20,
                  fontSize: 18,
                }}
              >
                Confirm Password
              </Text>
              <TextInput
                secureTextEntry={true}
                textAlign="center"
                style={styles.input_item_place}
                onChangeText={(value) => setConfirmPassword(value)}
                value={confirmPassword}
              />
            </View>
          </View>
          <View style={styles.loginBottomView}>
            <TouchableOpacity
              onPress={() => onSubmit()}
              style={styles.loginBottom}
            >
              <Text style={styles.loginBottomText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.doNotHaveAcc}>
              <Text style={styles.doNotHaveAccText}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("signupPage")}
              >
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ffad33",
  },
  colicIcon: {
    paddingTop: 100,
    height: 200,
    // flex: 1,
  },
  colicIconText: {
    fontSize: 45,
    alignSelf: "center",
    //    fontFamily: "Montserrat",
    color: "white",
  },
  loginBottomView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 450,
  },
  loginBottom: {
    height: 50,
    width: "70%",
    backgroundColor: "black",
    borderRadius: 124,
    padding: 10,
  },
  loginBottomText: {
    fontSize: 20,
    color: "#ffff",
    textAlign: "center",
  },
  doNotHaveAcc: {
    marginTop: 40,
  },
  doNotHaveAccText: {
    alignItems: "center",
    margin: 6,
    fontSize: 16,
    color: "grey",
  },
  registerText: {
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "grey",
  },
  babyImage: {
    height: 290,
    width: 300,
    marginLeft: -100,
  },
  input_item_place: {
    borderColor: "black",
    borderBottomWidth: 2,
    borderRadius: 5,
    height: 40,
    fontSize: 30,
  },
});

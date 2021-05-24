import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { forgetPWCheckUsername } from "../../../service/authService";
import Loader from "./../../../../common/loader";

export default function ForgetPW(props) {
  const [username, setUsername] = useState("");
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);
  const setLoaderOff = () => {
    setLoaderIsOpen(false);
  };

  return (
    <>
      <Loader loaderIsOpen={loaderIsOpen} />
      <View style={styles.pageContainer}>
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
            height: "20%",
            width: "80%",
            alignSelf: "center",
            marginTop: -20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingBottom: 20,
              fontSize: 20,
            }}
          >
            Username
          </Text>
          <TextInput
            textAlign="center"
            style={styles.input_item_place}
            onChangeText={(value) => setUsername(value)}
            value={username}
          />
        </View>
        <View style={styles.loginBottomView}>
          <TouchableOpacity
            onPress={() => {
              forgetPWCheckUsername(
                { usernameEmail: username },
                props,
                setLoaderOff
              );
              setLoaderIsOpen(true);
            }}
            style={styles.loginBottom}
          >
            <Text style={styles.loginBottomText}>Submit</Text>
          </TouchableOpacity>
          <View style={styles.doNotHaveAcc}>
            <Text style={styles.doNotHaveAccText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("signupPage")}
            >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    backgroundColor: "#ffad33",
  },
  colicIcon: {
    paddingTop: 100,
    height: "40%",
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
    height: "40%",
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
    //fontFamily: "Montserrat",
    textAlign: "center",
  },
  doNotHaveAcc: {
    marginTop: 40,
  },
  doNotHaveAccText: {
    alignItems: "center",
    margin: 6,
    fontSize: 16,
    //fontFamily: "Montserrat",
    color: "grey",
  },
  registerText: {
    textAlign: "center",
    fontSize: 16,
    //fontFamily: "Montserrat",
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

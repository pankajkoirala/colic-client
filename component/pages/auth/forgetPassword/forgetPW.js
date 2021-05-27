import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
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
      <ScrollView style={styles.pageContainer}>
        <Loader loaderIsOpen={loaderIsOpen} />
        <View>
          <View style={styles.colicIcon}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("loginFrontPage")}
              style={styles.backIcon}
            >
              <FontAwesome5 name={"arrow-left"} size={20} />
            </TouchableOpacity>
            <Text
              onPress={() => props.navigation.navigate("signupPage")}
              style={styles.colicIconText}
            >
              COLIC
            </Text>
          </View>
          <View style={styles.usernameView}>
            <Text style={styles.usernameLabel}>Username</Text>
            <TextInput
              textAlign="center"
              style={styles.input_item_place}
              onChangeText={(value) => setUsername(value)}
              value={username}
            />
          </View>
          <View style={styles.submitBottomView}>
            <TouchableOpacity
              onPress={() => {
                forgetPWCheckUsername(
                  { usernameEmail: username },
                  props,
                  setLoaderOff
                );
                setLoaderIsOpen(true);
              }}
              style={styles.forgetPWBottom}
            >
              <Text style={styles.submitBottomText}>Submit</Text>
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
    backgroundColor: "#ffad33",
    flexDirection: "column",
  },
  colicIcon: {
    paddingTop: 100,
    height: 250,
    // flex: 1,
  },
  colicIconText: {
    fontSize: 45,
    alignSelf: "center",
    //    fontFamily: "Montserrat",
    color: "white",
  },
  submitBottomView: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  forgetPWBottom: {
    height: 50,
    width: "70%",
    backgroundColor: "black",
    borderRadius: 124,
    padding: 10,
  },
  submitBottomText: {
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
  usernameView: {
    height: "20%",
    width: "80%",
    alignSelf: "center",
    marginTop: -20,
  },
  usernameLabel: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 20,
  },
  backIcon: {
    paddingLeft: 20,
    position: "absolute",
    paddingTop: 90,
    zIndex: 999,
  },
});

import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

function LoginFrontPage(props) {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.colicIcon}>
        <Text
          onPress={() => props.navigation.navigate("signupPage")}
          style={styles.colicIconText}
        >
          COLIC
        </Text>
        <Image
          style={styles.babyImage}
          source={require("./../../../assets/baby.png")}
        />
      </View>
      <View style={styles.loginBottomView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("login")}
          style={styles.loginBottom}
        >
          <Text style={styles.loginBottomText}>LogIn</Text>
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
  );
}
export default LoginFrontPage;

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    backgroundColor: "#ffad33",
  },
  colicIcon: {
    paddingTop: 100,
    flex: 1,
  },
  colicIconText: {
    fontSize: 45,
    alignSelf: "center",
    fontFamily: "Montserrat",
    color: "white",
  },
  loginBottomView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Montserrat",
    textAlign: "center",
  },
  doNotHaveAcc: {
    marginTop: 40,
  },
  doNotHaveAccText: {
    alignItems: "center",
    margin: 6,
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "grey",
  },
  registerText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Montserrat",
    textDecorationLine: "underline",
    color: "grey",
  },
  babyImage: {
    height: 290,
    width: 300,
    marginLeft: -100,
  },
});

{
  /* </SafeAreaView>    <SafeAreaView>
   */
}

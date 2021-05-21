import React from "react";
import { Controller } from "react-hook-form";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { scanFingerprint } from "../../../../common/fingerprintUnlock";
import { ScrollView } from "react-native-gesture-handler";

export default function Login(props) {
  const {
    setEmail,
    setPassword,
    loginData,
    dispatchData,
    control,
    handleSubmit,
    errors,
    onSubmit,
    setLoaderOff,
  } = props;

  return (
    <ScrollView style={styles.loginContainer} bounces={false}>
      <View style={styles.loginContainer}>
        <View style={styles.topLogin_back_Icon}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("loginFrontPage")}
            style={styles.backIcon}
          >
            <FontAwesome5 name={"arrow-left"} size={20} />
          </TouchableOpacity>
          <Text style={styles.loginIcon}>Login</Text>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.loginFormView}>
            <View style={styles.form_socialLogin_view}>
              <View style={styles.input_item_view}>
                <Text style={styles.input_item_Label}> Email</Text>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <TextInput
                        style={styles.input_item_place}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                      />
                      {errors.email && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                    </View>
                  )}
                  name="email"
                  rules={{ required: true }}
                  defaultValue=""
                />
              </View>
              <View style={styles.input_item_view}>
                <Text style={styles.input_item_Label}> Password</Text>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <TextInput
                        style={styles.input_item_place}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        secureTextEntry={true}
                      />
                      {errors.password && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                    </View>
                  )}
                  name="password"
                  rules={{ required: true }}
                  defaultValue=""
                />
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ForgetPassword")}
              >
                <Text style={styles.forgetPassword}>Forget Password ?</Text>
              </TouchableOpacity>
              <View style={styles.logIn_fingerPrint_view}>
                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginButtonText}>LogIn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fingerPrintIcon}
                  onPress={() => scanFingerprint(dispatchData, setLoaderOff)}
                >
                  <FontAwesome5 name={"fingerprint"} size={40} />
                </TouchableOpacity>

                <View style={styles.or_line_view}>
                  <View style={styles.orLine} />
                  <View>
                    <Text style={styles.orText}>OR</Text>
                  </View>
                  <View style={styles.orLine} />
                </View>
                <View style={styles.socialLogInView}>
                  <TouchableOpacity
                    onPress={() => console.log("login with google")}
                    style={styles.loginWithGoogleFb}
                  >
                    <Image
                      style={styles.socialLoginImage}
                      source={require("./../../../../assets/google.png")}
                    />
                    <Text style={styles.socialLoginText}>
                      Contiue with Google
                    </Text>
                    <FontAwesome5
                      name={"arrow-right"}
                      size={20}
                      style={styles.socialLoginArrowIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => console.log("login with facebook")}
                    style={styles.loginWithGoogleFb}
                  >
                    <Image
                      style={styles.socialLoginImage}
                      source={require("./../../../../assets/facebook.png")}
                    />
                    <Text style={styles.socialLoginText}>
                      Contiue with Google
                    </Text>
                    <FontAwesome5
                      name={"arrow-right"}
                      size={20}
                      style={styles.socialLoginArrowIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    height: "100%",
    backgroundColor: "#ffad33",
  },
  topLogin_back_Icon: {
    paddingTop: 80,
    flexDirection: "row",
  },
  backIcon: {
    paddingLeft: 20,
    position: "absolute",
    paddingTop: 90,
    zIndex: 999,
  },
  loginIcon: {
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    //fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  loginFormView: {
    paddingTop: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  input_item_view: {
    margin: 5,
  },
  input_item_Label: {
    marginVertical: 4,
    //fontFamily: "Montserrat",
    color: "grey",
  },
  input_item_place: {
    borderColor: "black",
    borderBottomWidth: 2,
    borderRadius: 5,
    height: 30,
  },
  errorMessage: {
    color: "red",
    //  fontFamily: "Montserrat",
    textAlign: "center",
    marginTop: 2,
  },
  forgetPassword: {
    fontSize: 14,
    color: "grey",
    // fontFamily: "Montserrat",
    textAlign: "right",
    marginTop: 4,
  },
  logIn_fingerPrint_view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  loginButton: {
    height: 50,
    width: "60%",
    backgroundColor: "black",
    borderRadius: 124,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 20,
    color: "#ffff",
    //fontFamily: "Montserrat",
  },
  or_line_view: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  orLine: { flex: 1, height: 1, backgroundColor: "grey" },
  loginWithGoogleFb: {
    height: 40,
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 40,
    marginVertical: 10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  socialLoginImage: {
    height: 30,
    width: 30,
    margin: 2,
  },
  socialLoginText: {
    margin: 6,
    fontSize: 15,
    // fontFamily: "Montserrat",
  },
  fingerPrintIcon: {
    margin: 10,
  },
  socialLoginArrowIcon: {
    margin: 8,
  },
  socialLogInView: {
    marginTop: 25,
  },
  form_socialLogin_view: {
    width: "80%",
  },
  orText: { width: 50, textAlign: "center" },
});

{
  /* <Text style={{ marginTop: 20 }}>
              Don 't Have an Account?
              <Text
                style={{ margin: 2, color: "blue" }}
                onPress={() => props.navigation.navigate("signUp")}
              >
                Click here
              </Text>
            </Text> */
}

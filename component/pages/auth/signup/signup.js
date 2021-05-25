import React from "react";
import { CheckBox } from "react-native-elements";
import { Controller } from "react-hook-form";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { KeyboardAvoidingView } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

function Login(props) {
  const {
    checkedOne,
    setCheckedOne,
    checkedTwo,
    setCheckedTwo,
    control,
    handleSubmit,
    errors,
    onSubmit,
  } = props;

  return (
    <ScrollView
      enabled
      behavior={"padding"}
      style={styles.signupContainer}
      bounces={false}
    >
      <View style={styles.topSignUp_back_Icon}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("loginFrontPage")}
          style={styles.backIcon}
        >
          <FontAwesome5 name={"arrow-left"} size={20} />
        </TouchableOpacity>
        <Text style={styles.signUpIcon}>Sign Up</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={styles.signUpFormView}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}> Username</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    style={styles.inputArea}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
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
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}> Email</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    style={styles.inputArea}
                    onBlur={onBlur}
                    onChangeText={(value) => {
                      onChange(value);
                    }}
                    value={value}
                  />
                  {errors.email && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              name="email"
              rules={{
                required: true,
              }}
              defaultValue=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}> Password</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    style={styles.inputArea}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    secureTextEntry={true}
                  />
                  {errors.password && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}> Confirm Password</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    style={styles.inputArea}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    secureTextEntry={true}
                  />
                  {errors.confirmPassword && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              name="confirmPassword"
              rules={{
                required: true,
              }}
              defaultValue=""
            />
          </View>
        </View>
        <View style={styles.checkBoxView}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <CheckBox
                  title="By Signing up you agree to our terms and condition."
                  containerStyle={styles.checkBox}
                  checkedColor={errors.termAndCondition ? "red" : "black"}
                  uncheckedColor={errors.termAndCondition ? "red" : "black"}
                  checked={checkedOne}
                  onPress={() => {
                    setCheckedOne(!checkedOne);
                    console.log(checkedOne);
                    if (!checkedOne) {
                      onChange(true);
                    } else {
                      onChange(false);
                    }
                  }}
                />
              </View>
            )}
            name="termAndCondition"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                title="Subscribe to our Newsletter and receive update on news and events."
                containerStyle={styles.checkBox}
                checkedColor="black"
                uncheckedColor="black"
                checked={checkedTwo}
                onPress={() => {
                  setCheckedTwo(!checkedTwo);
                  console.log(checkedTwo);
                  if (!checkedTwo) {
                    onChange(true);
                  } else {
                    onChange(false);
                  }
                }}
              />
            )}
            name="is_subscribe"
            defaultValue="false"
          />
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.signUpButton}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
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
          <Text style={styles.socialLoginText}>Contiue with Google</Text>
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
          <Text style={styles.socialLoginText}>Contiue with Google</Text>
          <FontAwesome5
            name={"arrow-right"}
            size={20}
            style={styles.socialLoginArrowIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Login;

const styles = StyleSheet.create({
  signupContainer: {
    height: "100%",
    flex: 1,
    backgroundColor: "#ffad33",
  },
  topSignUp_back_Icon: {
    paddingTop: 60,
    flexDirection: "row",
  },
  backIcon: {
    paddingLeft: 20,
    position: "absolute",
    paddingTop: 60,
    zIndex: 999,
  },
  signUpIcon: {
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    fontWeight: "bold",
  },
  signUpFormView: {
    paddingTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    height: 50,
    borderBottomWidth: 2,
    borderColor: "black",
    width: "80%",
    alignSelf: "center",
    marginVertical: 4,
  },
  inputArea: {
    height: 30,
    width: "80%",
  },
  inputLabel: {
    alignSelf: "flex-start",
    color: "grey",
    marginVertical: 2,
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 2,
  },
  checkBoxView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginVertical: 26,
  },
  checkBox: {
    backgroundColor: "#ffad33",
    borderColor: "#ffad33",
    borderWidth: 0,
    width: "80%",
    alignSelf: "center",
    marginVertical: -6,
  },
  signUpButton: {
    height: 50,
    width: "60%",
    backgroundColor: "black",
    borderRadius: 124,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  signUpButtonText: {
    fontSize: 20,
    color: "#ffff",
  },
  or_line_view: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  orLine: { flex: 1, height: 1, backgroundColor: "grey" },
  loginWithGoogleFb: {
    height: 40,
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 40,
    marginVertical: 8,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
    paddingHorizontal: 8,
    alignSelf: "center",
  },
  socialLoginImage: {
    height: 30,
    width: 30,
    margin: 2,
  },
  socialLoginText: {
    margin: 6,
    fontSize: 15,
  },

  socialLoginArrowIcon: {
    margin: 8,
  },
  socialLogInView: {
    marginTop: 18,
  },
  form_socialLogin_view: {
    width: "80%",
  },
  orText: { width: 50, textAlign: "center" },
});

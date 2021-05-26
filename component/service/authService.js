import axios from "axios";
import * as LocalAuthentication from "expo-local-authentication";
import { base_URL } from "../utils/const";
import { LOGIN_FAILED } from "../../common/const";
import {
  AlertWithNavigator,
  AlertWithNavigatorForgetPW,
  errorAlert,
  fingerPrintSaveAlert,
  successAlert,
} from "../../common/alert";

//capibality checking whether device has fingureprint scaner of not
async function checkCompatibleSaveLoginInData(token, Data) {
  let hasBiometric = await LocalAuthentication.hasHardwareAsync();
  let hasSetup = await LocalAuthentication.isEnrolledAsync();
  if (hasBiometric && hasSetup) {
    fingerPrintSaveAlert(token, Data);
  }
}
//login request sending
export const AuthLogin = (data, dispatch, setLoaderOff) => {
  axios({
    url: `${base_URL}/auth/login`,
    method: "post",
    data: data,
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        dispatch(`Bearer ${res.data.token}`);
        checkCompatibleSaveLoginInData(`Bearer ${res.data.token}`, data);
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        setLoaderOff();
        errorAlert(LOGIN_FAILED);
        executed = true;
      }
    });
};
//fingureprint login request sending
export const fingerPrintLogin = (data, dispatch, setLoaderOff) => {
  axios({
    url: `${base_URL}/auth/login`,
    method: "post",
    data: data,
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        dispatch(`Bearer ${res.data.token}`);
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        setLoaderOff();
        errorAlert(LOGIN_FAILED);
        executed = true;
      }
    });
};
//active user after signup
export const activateUser = (data, props, setLoaderOff) => {
  let OTP = "";
  Object.values(data).forEach((arg) => {
    OTP = OTP + arg;
  });
  axios({
    url: `${base_URL}/auth/activateUser`,
    method: "post",
    data: { OTP: OTP },
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        setLoaderOff();
        AlertWithNavigator(res?.data?.message, props, "login");
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        setLoaderOff();
        errorAlert(err?.response?.data?.message);
        executed = true;
      }
    });
};
//signup submit function
export const signup = (data, props, setLoaderOff) => {
  console.log(data);
  axios({
    url: `${base_URL}/auth/register`,
    method: "post",
    data: data,
  })
    .then((res) => {
      var executed = false;
      props.navigation.navigate("VerifyUser");
      setLoaderOff();
      if (!executed) {
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        console.log(err.response.data);
        setLoaderOff();
        errorAlert(err?.response?.data?.message);
        executed = true;
      }
    });
};
//forgetPassword function to check username is valid or not
export const forgetPWCheckUsername = (data, props, setLoaderOff) => {
  axios({
    url: `${base_URL}/auth/forget_Password`,
    method: "post",
    data: data,
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        AlertWithNavigatorForgetPW(
          res?.data?.message,
          props,
          "ForgetPasswordVerifyingUser",
          data
        );

        setLoaderOff();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        console.log(err.response);
        setLoaderOff();
        errorAlert(err?.response?.data?.message);
        executed = true;
      }
    });
};
//after  email valid ,OTP validation
export const forgetPWVerifyUser = (data, props, setLoaderOff) => {
  axios({
    url: `${base_URL}/auth/forget_Password_send_OTP`,
    method: "post",
    data: { OTP: data.OTP },
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        props.navigation.navigate("ChangePassword", {
          data: data,
        });

        setLoaderOff();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        console.log(err.response.data);
        setLoaderOff();
        errorAlert(err?.response?.data?.message);
        executed = true;
      }
    });
};
//new password changing function
export const forgetPWchangePW = (data, props, setLoaderOff) => {
  axios({
    url: `${base_URL}/auth/forget_Password_change_password`,
    method: "post",
    data: data,
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        AlertWithNavigator(res?.data?.message, props, "login");
        setLoaderOff();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        console.log(err.response.data);
        setLoaderOff();
        errorAlert(err?.response?.data?.message);
        executed = true;
      }
    });
};

//new password changing function
export const resendOTP = (data) => {
  axios({
    url: `${base_URL}/auth/resendOTP`,
    method: "post",
    data: data,
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        successAlert(res?.data?.message);
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        console.log(err.response.data);
        errorAlert(err?.response?.data?.message);
        executed = true;
      }
    });
};

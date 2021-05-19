import axios from "axios";
import { base_URL } from "../utils/const";
import { LOGIN_FAILED } from "../../common/const";
import {
  AlertWithNavigator,
  errorAlert,
  fingerPrintSaveAlert,
} from "../../common/alert";

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
        fingerPrintSaveAlert(`Bearer ${res.data.token}`, data);
        setLoaderOff();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        errorAlert(LOGIN_FAILED, setLoaderOff);
        executed = true;
      }
    });
};

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
        setLoaderOff();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        errorAlert(LOGIN_FAILED, setLoaderOff);
        executed = true;
      }
    });
};

export const activateUser = (data, props, setLoaderOff) => {
  let OTP = "";
  Object.values(data).forEach((arg) => {
    OTP = OTP + arg;
  });
  console.log(parseInt(OTP));
  axios({
    url: `${base_URL}/auth/activateUser`,
    method: "post",
    data: { OTP: OTP },
  })
    .then((res) => {
      var executed = false;
      if (!executed) {
        AlertWithNavigator(res?.data?.message, props, "login", setLoaderOff);
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        errorAlert(err?.response?.data?.message, setLoaderOff);
        executed = true;
      }
    });
};

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
        errorAlert(err?.response?.data?.message, setLoaderOff);
        executed = true;
      }
    });
};

export const patientProflieUpdate = (id, data, token, dispatch) => {
  // axios({
  //   url: `${base_URL}/api/patient/profileUpdate/${id}`,
  //   method: "put",
  //   data: data,
  //   headers: { token: token },
  // })
  //   .then((res) => {
  //     dispatch();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

export const ProflieImageUpdate = (id, data, token, dispatch) => {
  // const fileData = new FormData();
  // fileData.append("photos", data);
  // console.log(
  //   "🚀 ~ file: authService.js ~ line 37 ~ ProflieImageUpdate ~ data",
  //   fileData
  // );
  // axios({
  //   url: `${base_URL}/api/user/profileimage/${id}`,
  //   method: "post",
  //   dataType: "multipart/form-data",
  //   data: fileData,
  //   headers: { token: token },
  // })
  //   .then((res) => {
  //     console.log("🚀 ~ file: authService.js ~ line 47 ~ .then ~ res", res);
  //     dispatch();
  //     // dispatch('chalo')
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

import axios from "axios";
import { base_URL } from "../utils/const";
import { LOGIN_FAILED } from "../../common/const";
import {
  AlertWithNavigator,
  errorAlert,
  fingerPrintSaveAlert,
} from "../../common/alert";

export const AuthLogin = (data, dispatch) => {
  axios({
    url: `${base_URL}/auth/login`,
    method: "post",
    data: data,
  })
    .then((res) => {
      dispatch(`Bearer ${res.data.token}`);
      fingerPrintSaveAlert(`Bearer ${res.data.token}`, data);
    })
    .catch((err) => {
      console.log(err);
      errorAlert(LOGIN_FAILED);
    });
};

export const fingerPrintLogin = (data, dispatch) => {
  axios({
    url: `${base_URL}/auth/login`,
    method: "post",
    data: data,
  })
    .then((res) => {
      dispatch(`Bearer ${res.data.token}`);
    })
    .catch((err) => {
      console.log(err.response.data);
      errorAlert(LOGIN_FAILED);
    });
};

export const activateUser = (data, props) => {
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
      AlertWithNavigator(res?.data?.message, props, "login");
    })
    .catch((err) => {
      errorAlert(err?.response?.data?.message);
    });
};

export const signup = (data, props) => {
  console.log(data);
  axios({
    url: `${base_URL}/auth/register`,
    method: "post",
    data: data,
  })
    .then((res) => {
      console.log(
        "🚀 ~ file: authService.js ~ line 67 ~ .then ~ res",
        res.data
      );
      props.navigation.navigate("VerifyUser");
    })
    .catch((err) => {
      console.log(err);
      errorAlert(err?.response?.data?.message);
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

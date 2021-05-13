import axios from "axios";
import { base_URL } from "../utils/const";
import { LOGIN_FAILED } from "../../common/const";
import { successAlert } from "../../common/alert";

export const patientProfileUpdate = (id, data, token, dispatch) => {
  axios({
    url: `${base_URL}/auth/update_profile/${id}`,
    method: "put",
    data: data,
    headers: { authorization: token },
  })
    .then((res) => {
      dispatch();
      successAlert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const ProfileImageUpdate = (id, data, token, dispatch) => {
  const fileData = new FormData();
  fileData.append("profileimage", data);

  axios({
    url: `${base_URL}/auth/update_profileImage/${id}`,
    method: "put",
    dataType: "multipart/form-data",
    data: fileData,
    headers: { authorization: token },
  })
    .then((res) => {
      dispatch();
      successAlert(res.data.message);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

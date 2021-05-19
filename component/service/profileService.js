import axios from "axios";
import { base_URL } from "../utils/const";
import { successAlert, errorAlert } from "../../common/alert";

export const patientProfileUpdate = (
  id,
  data,
  token,
  dispatch,
  setLoaderOff
) => {
  axios({
    url: `${base_URL}/auth/update_profile/${id}`,
    method: "put",
    data: data,
    headers: { authorization: token },
  })
    .then((res) => {
      var executed = false;

      if (!executed) {
        dispatch();
        successAlert(res.data.message);
        setLoaderOff();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        errorAlert(" Error  try Again", setLoaderOff);
        console.log(err);
        executed = true;
      }
    });
};

export const ProfileImageUpdate = (id, data, token, dispatch, setLoaderOff) => {
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
      var executed = false;
      if (!executed) {
        dispatch();
        successAlert(res.data.message);
        setLoaderOff();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        errorAlert(" Error  try Again", setLoaderOff);
        executed = true;
      }
    });
};

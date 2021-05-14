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
      successAlert(res.data.message);
      dispatch();
    })
    .catch((err) => {
      errorAlert(" Error  try Again", setLoaderOff);
      console.log(err);
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
      dispatch();
      successAlert(res.data.message);
    })
    .catch((err) => {
      errorAlert(" Error  try Again", setLoaderOff);
      console.log(err.response.data);
    });
};

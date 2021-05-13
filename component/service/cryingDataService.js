import axios from "axios";
import { base_URL } from "../utils/const";
import { LOGIN_FAILED } from "../../common/const";
import { successAlert, errorAlert } from "../../common/alert";

export const weeCryingData = (id, token, date, dispatch) => {
  axios
    .post(
      `${base_URL}/baby/get_week_crying_data`,
      {
        user_id: id,
        date: date,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      }
    )
    .then((res) => {
      dispatch(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const dayCryingData = (id, token, date, dispatch) => {
  axios
    .post(
      `${base_URL}/baby/get_day_crying_data`,
      {
        user_id: id,
        date: date,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      }
    )
    .then((res) => {
      dispatch(res.data.message);
    })
    .catch((err) => {
      console.log("server error", err.response);
    });
};

export const postCryingData = (id, token, date, dispatch) => {
  axios
    .post(`${base_URL}/baby/crying_data`, date, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
    .then((res) => {
      dispatch();
      console.log(res.data.data);
      successAlert("Data Send Successfully");
    })
    .catch((err) => {
      errorAlert("Try Again");
      console.log(err);
    });
};

import axios from "axios";
import { base_URL } from "../utils/const";
import { LOGIN_FAILED } from "../../common/const";
import { successAlert, errorAlert } from "../../common/alert";

export const weeCryingData = (id, token, date, dispatch, setLoaderOff) => {
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
      errorAlert("Try Again", setLoaderOff);
    });
};

export const dayCryingData = (id, token, date, dispatch, setLoaderOff) => {
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
      errorAlert("Try Again", setLoaderOff);
    });
};

export const postCryingData = (id, token, date, dispatch, setLoaderOff) => {
  axios
    .post(`${base_URL}/baby/crying_data`, date, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
    .then((res) => {
      var executed = false;
      if (!executed) {
        successAlert("Data Send Successfully");
        dispatch();
        executed = true;
      }
    })
    .catch((err) => {
      var executed = false;
      if (!executed) {
        errorAlert("Try Again", setLoaderOff);
        console.log(err);
        executed = true;
      }
    });
};

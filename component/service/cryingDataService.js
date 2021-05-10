import axios from "axios";
import { base_URL } from "../utils/const";
import { LOGIN_FAILED } from "../../common/const";
import { successAlert } from "../../common/alert";

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

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { base_URL } from "../utils/const";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  PROFILE_DETAIL,
  RELOAD,
  CRYING_DATA,
  BLOGS_DATA,
} from "../redux/action/action";
import moment from "moment";

const FetchDataComponent = () => {
  const [reload, setReload] = useState(false);

  const dispatch = useDispatch();
  const { token, profileDetail } = useSelector((state) => ({
    token: state.token.token,
    profileDetail: state.profileDetail.profileDetail,
  }));

  useEffect(() => {
    //crying data fetch-----------------------------------------------------------------------------------------------
    if (profileDetail.id) {
      axios
        .post(
          `${base_URL}/baby/get_week_crying_data`,
          {
            user_id: profileDetail.id,
            date: moment().format("YYYY-MM-DD"),
          },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        )
        .then((res) => {
          var executed = false;

          if (!executed) {
            dispatch({ type: CRYING_DATA, payload: res.data.message });
            executed = true;
          }
        })
        .catch((err) => {
          console.log("server error", err.response);
        });
    }
    //personal data fetch-------------------------------------------------------------------------------------------
    axios
      .get(`${base_URL}/auth/user_profile`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        var executed = false;

        if (!executed) {
          dispatch({ type: PROFILE_DETAIL, payload: res.data.message[0] });
          executed = true;
        }
      })
      .catch((err) => {
        console.log("get profile pic", err);
      });

    dispatch({
      type: RELOAD,
      payload: { reload: reload, setReload: setReload },
    });
    //blogs data---------------------------------------------------------------------------------------------------------
    axios
      .get(`${base_URL}/api/all_blog`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        var executed = false;
        if (!executed) {
          dispatch({ type: BLOGS_DATA, payload: res.data.message });
          executed = true;
        }
      })
      .catch((err) => {
        console.log("get profile pic", err.response);
      });

    dispatch({
      type: RELOAD,
      payload: { reload: reload, setReload: setReload },
    });
  }, [profileDetail.id, reload]);

  return <View></View>;
};
export default FetchDataComponent;

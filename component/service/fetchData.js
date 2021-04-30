import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { base_URL } from "../utils/const";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_DETAIL, RELOAD, CRYING_DATA } from "../redux/action/action";

const FetchDataComponent = () => {
  const [reload, setReload] = useState(false);

  const dispatch = useDispatch();
  const { token, profileDetail } = useSelector((state) => ({
    token: state.token.token,
    profileDetail: state.profileDetail.profileDetail,
  }));

  useEffect(() => {
    //crying data fetch
    axios
      .post(
        `${base_URL}/baby/get_crying_data`,
        {
          user_id: profileDetail.id,
          date: "2021-04-07T12:17:50.730Z",
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      )
      .then((res) => {
        dispatch({ type: CRYING_DATA, payload: res.data.message });
      })
      .catch((err) => {
        console.log("server error", err.response);
      });

    //personal data fetch
    axios
      .get(`${base_URL}/auth/user_profile`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        dispatch({ type: PROFILE_DETAIL, payload: res.data.message[0] });
      })
      .catch((err) => {
        console.log("get profile pic", err);
      });

    dispatch({
      type: RELOAD,
      payload: { reload: reload, setReload: setReload },
    });
  }, [reload]);

  return <View></View>;
};
export default FetchDataComponent;

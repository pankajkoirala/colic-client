import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { base_URL } from "../utils/const";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_DETAIL, RELOAD } from "../redux/action/action";

const FetchDataComponent = () => {
  const [reload, setReload] = useState(false);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => ({
    token: state.token.token,
  }));

  useEffect(() => {
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

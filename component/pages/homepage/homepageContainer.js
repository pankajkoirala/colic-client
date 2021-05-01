import React, { useState } from "react";
import HomePage from "./homepage";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import sampleBabyCryingData from "./babyCryingSampleData.json";
import { CRYING_DATA } from "../../redux/action/action";
import axios from "axios";
import { base_URL } from "../../utils/const";

export default HomepageContainer = (props) => {
  const dispatch = useDispatch();
  const { token, profileDetail, reload, crying_data } = useSelector(
    (state) => ({
      token: state.token.token,
      profileDetail: state.profileDetail.profileDetail,
      reload: state.reload.reload,
      crying_data: state.crying_data.crying_data,
    })
  );
  const [day, setDay] = useState("3");
  const [gettingDataDate, setGettingDataDate] = useState(moment());

  //--------------------------------------------------------------------------------------------------------------------------------
  //data get by day
  const getCrying_dataByDay = (date) => {
    axios
      .post(
        `${base_URL}/baby/get_day_crying_data`,
        {
          user_id: profileDetail.id,
          date: gettingDataDate.format("YYYY-MM-DD"),
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
  };

  //--------------------------------------------------------------------------------------------------------
  //data get by day
  const getCrying_dataByweek = (date) => {
    axios
      .post(
        `${base_URL}/baby/get_week_crying_data`,
        {
          user_id: profileDetail.id,
          date: gettingDataDate.format("YYYY-MM-DD"),
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
  };

  //-----------------------------------------------------------------------------------------------
  //lebel according to date
  const dayLabel = (day) => {
    switch (day) {
      case 0:
        return "S";
      case 1:
        return "M";
      case 2:
        return "T";
      case 3:
        return "W";
      case 4:
        return "T";
      case 5:
        return "F";
      case 6:
        return "S";
    }
  };
  //--------------------------------------------------------------------------------------------------------------------------------
  // console.log("asd", dayLabel(new Date(crying_data[0].date).getDay()));

  const babyCryingData = [
    [
      { startTime: "1:00 AM" },
      { startTime: "2:00 AM" },
      { startTime: "3:00 AM" },
      { startTime: "4:00 AM" },
      { startTime: "5:00 AM" },
      { startTime: "6:00 AM" },
      { startTime: "7:00 AM" },
      { startTime: "8:00 AM" },
      { startTime: "9:00 AM" },
      { startTime: "10:00 AM" },
      { startTime: "11:00 AM" },
      { startTime: "12:00 AM" },
      { startTime: "1:00 pm" },
      { startTime: "2:00 pm" },
      { startTime: "3:00 pm" },
      { startTime: "4:00 pm" },
      { startTime: "5:00 pm" },
      { startTime: "6:00 pm" },
      { startTime: "7:00 pm" },
      { startTime: "8:00 pm" },
      { startTime: "9:00 pm" },
      { startTime: "10:00 pm" },
      { startTime: "11:00 pm" },
      { startTime: "12:00 pm" },
    ],
  ];
  crying_data.map((arg) => babyCryingData.push(arg.baby_data));
  //----------------------------------------------------------------------------------------------------------------------------------------

  const serverData = {
    label: [
      "Label",
      dayLabel(new Date(crying_data[0]?.date).getDay()),
      dayLabel(new Date(crying_data[1]?.date).getDay()),
      dayLabel(new Date(crying_data[2]?.date).getDay()),
      dayLabel(new Date(crying_data[3]?.date).getDay()),
      dayLabel(new Date(crying_data[4]?.date).getDay()),
      dayLabel(new Date(crying_data[5]?.date).getDay()),
      dayLabel(new Date(crying_data[6]?.date).getDay()),
    ],
    data: babyCryingData,
  };
  // console.log(
  //   "🚀 ~ file: homepageContainer.js ~ line 21 ~ serverData",
  //   serverData
  // );

  const labelByDay = (today) => {
    switch (today) {
      default:
        return {
          label: [
            "Label",
            dayLabel(new Date(crying_data[0]?.date).getDay()),
            dayLabel(new Date(crying_data[1]?.date).getDay()),
            dayLabel(new Date(crying_data[2]?.date).getDay()),
            dayLabel(new Date(crying_data[3]?.date).getDay()),
            dayLabel(new Date(crying_data[4]?.date).getDay()),
            dayLabel(new Date(crying_data[5]?.date).getDay()),
            dayLabel(new Date(crying_data[6]?.date).getDay()),
          ],
          data: babyCryingData,
        };
    }
  };

  const styleValue = (arg, i, ind, styles) => {
    if (i !== 0) {
      switch (arg[ind].intensity) {
        case 0:
          return styles.valueNone;
        case 1:
          return styles.valueOne;

        case 2:
          return styles.valueTwo;
        case 3:
          return styles.valueThree;
        case 4:
          return styles.valueFour;
        case 5:
          return styles.valueFive;
      }
    } else {
      return styles.valueLabel;
    }
  };

  return (
    <HomePage
      day={day}
      setDay={setDay}
      labelByDay={labelByDay}
      styleValue={styleValue}
      profileDetail={profileDetail}
      getCrying_dataByDay={getCrying_dataByDay}
      getCrying_dataByweek={getCrying_dataByweek}
      {...props}
    />
  );
};

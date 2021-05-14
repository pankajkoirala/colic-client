import React, { useEffect, useState } from "react";
import HomePage from "./homepage";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { CRYING_DATA } from "../../redux/action/action";
import Loader from "./../../../common/loader";
import {
  dayCryingData,
  weeCryingData,
  postCryingData,
} from "../../service/cryingDataService";
import DataSendingModel from "./dataSendingModel";
import { View } from "react-native";

export default HomepageContainer = (props) => {
  const dispatch = useDispatch();
  const { token, profileDetail, reload, crying_data, blogs_data } = useSelector(
    (state) => ({
      token: state.token.token,
      profileDetail: state.profileDetail.profileDetail,
      reload: state.reload.reload,
      crying_data: state.crying_data.crying_data,
      blogs_data: state.blogs_data.blogs_data,
    })
  );

  const [day, setDay] = useState("3");
  const [gettingDataDate, setGettingDataDate] = useState(new Date());
  const [dataShow, setDataShow] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [fromHours, setFromHours] = useState(moment());
  const [toHours, setToHours] = useState(moment());
  const [intensity, setIntensity] = useState(0);
  const [openTimePicker1, setOpenTimePicker1] = useState(false);
  const [openTimePicker2, setOpenTimePicker2] = useState(false);
  const [cryingData, setCryingData] = useState([]);
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);
  console.log(
    "🚀 ~ file: homepageContainer.js ~ line 29 ~ gettingDataDate",
    gettingDataDate
  );

  //-----------------------------------------------------------------------------------------------------------------------------------
  const cryingDataDespatch = (data) => {
    dispatch({ type: CRYING_DATA, payload: data });
  };
  const reloadFetchData = () => {
    reload.setReload(!reload.reload);
    setLoaderIsOpen(false);
  };
  const setLoaderOff = () => {
    setLoaderIsOpen(false);
  };
  useEffect(() => {
    if (profileDetail.id) {
      if (dataShow === false) {
        let reqDate = moment(gettingDataDate).format("YYYY-MM-DD");
        weeCryingData(
          profileDetail.id,
          token,
          reqDate,
          cryingDataDespatch,
          setLoaderOff
        );
      } else {
        let reqDate = moment(gettingDataDate).format("YYYY-MM-DD");

        dayCryingData(
          profileDetail.id,
          token,
          reqDate,
          cryingDataDespatch,
          setLoaderOff
        );
      }
    }
  }, [gettingDataDate, profileDetail.id, dataShow]);

  //--------------------------------------------------------------------------------------------------------------------------------
  //data get by day
  let baby_data = [];
  let startTime = parseInt(moment(fromHours).format("H"));
  let endTime = parseInt(moment(toHours).format("H"));
  const todayDate = moment().format("YYYY-MM-DD") + "T12:00:00";

  useEffect(() => {
    const posting_baby_data = [];
    for (let index = startTime; index <= endTime; index++) {
      posting_baby_data.push({ intensity: intensity, startTime: index });
    }

    setCryingData(posting_baby_data);
  }, [fromHours, toHours, intensity]);
  const sendingData_Crying = () => {
    const sendingData = {
      user_id: profileDetail.id,
      posteddate: todayDate,
      baby_data: cryingData,
    };
    setLoaderIsOpen(true);
    postCryingData(
      profileDetail.id,
      token,
      sendingData,
      reloadFetchData,
      setLoaderOff
    );
  };
  //--------------------------------------------------------------------------------------------------------

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
    <View>
      <Loader loaderIsOpen={loaderIsOpen} />
      <DataSendingModel
        fromHours={fromHours}
        setFromHours={setFromHours}
        toHours={toHours}
        setToHours={setToHours}
        intensity={intensity}
        setIntensity={setIntensity}
        openTimePicker1={openTimePicker1}
        setOpenTimePicker1={setOpenTimePicker1}
        openTimePicker2={openTimePicker2}
        setOpenTimePicker2={setOpenTimePicker2}
        setModelOpen={setModelOpen}
        modelOpen={modelOpen}
        sendingData_Crying={sendingData_Crying}
      />
      <HomePage
        day={day}
        setDay={setDay}
        labelByDay={labelByDay}
        styleValue={styleValue}
        profileDetail={profileDetail}
        setGettingDataDate={setGettingDataDate}
        setDataShow={setDataShow}
        setModelOpen={setModelOpen}
        {...props}
        modelOpen={modelOpen}
      />
    </View>
  );
};

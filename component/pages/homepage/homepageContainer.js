import React, { useEffect, useState } from "react";
import HomePage from "./homepage";
import moment from "moment";
import { Text } from "react-native-elements";
import SampleJson from "./babyCryingSampleData.json";

import { useDispatch, useSelector } from "react-redux";
import { CRYING_DATA } from "../../redux/action/action";
import Loader from "./../../../common/loader";
import {
  dayCryingData,
  weeCryingData,
  postCryingData,
} from "../../service/cryingDataService";
import DataSendingModel from "./dataSendingModel";
import { ActivityIndicator, View } from "react-native";

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

  //-------------------------------------------------------------------------------------------------------------------------------------
  //average crying alculation
  const getFraction = (decimal) => {
    for (var denominator = 1; (decimal * denominator) % 1 !== 0; denominator++);
    let numerator = decimal * denominator;
    return numerator + "/" + denominator;
  };
  let averagedata = crying_data.map((arg) => arg.baby_data);
  let totalSum = 0;
  for (let index = 0; index < averagedata.length; index++) {
    averagedata[index].map((arg1) => {
      if (arg1.intensity !== 0) {
        totalSum = totalSum + 1;
      }
    });
  }

  let averageInDecimal = (totalSum / 168).toFixed(1);
  const averageCryingInFraction = getFraction(averageInDecimal);

  //-----------------------------------------------------------------------------------------------------------------
  //average volume
  let averageVolumedata = crying_data.map((arg) => arg.baby_data);
  let totalVolumeSum = 0;
  for (let index = 0; index < averagedata.length; index++) {
    averageVolumedata[index].map(
      (arg1) => (totalVolumeSum = totalVolumeSum + parseInt(arg1.intensity))
    );
  }

  let averageVolumeInDecimal = (totalVolumeSum / 168).toFixed(1);
  const averageVolumeInFraction = getFraction(averageVolumeInDecimal);

  //----------------------------------------------------------------------------------------------------------------------------------------------

  const [day, setDay] = useState("3");
  const [gettingDataDate, setGettingDataDate] = useState(new Date());
  const [dataShow, setDataShow] = useState(false);
  const [fromHours, setFromHours] = useState(moment());
  const [toHours, setToHours] = useState(moment());
  const [intensity, setIntensity] = useState(0);
  const [openTimePicker1, setOpenTimePicker1] = useState(false);
  const [openTimePicker2, setOpenTimePicker2] = useState(false);
  const [cryingData, setCryingData] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);

  //-----------------------------------------------------------------------------------------------------------------------------------
  const cryingDataDespatch = (data) => {
    dispatch({ type: CRYING_DATA, payload: data });
  };
  const reloadFetchData = () => {
    reload.setReload(!reload.reload);
    setLoaderIsOpen(false);
    console.log("reloader ");
  };
  const setLoaderOff = () => {
    setLoaderIsOpen(false);
    console.log("loader");
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
  const dayLabel = (day, date) => {
    switch (day) {
      case 0:
        return (
          <View>
            <Text style={{ fontWeight: "bold" }}>S </Text>
            <Text>{date} </Text>
          </View>
        );
      case 1:
        return (
          <View>
            <Text style={{ fontWeight: "bold" }}>M</Text>
            <Text>{date} </Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text style={{ fontWeight: "bold" }}>T </Text>
            <Text>{date} </Text>
          </View>
        );
      case 3:
        return (
          <View>
            <Text style={{ fontWeight: "bold" }}>W </Text>
            <Text>{date} </Text>
          </View>
        );
      case 4:
        return (
          <View>
            <Text style={{ fontWeight: "bold" }}>T</Text>
            <Text>{date} </Text>
          </View>
        );
      case 5:
        return (
          <View>
            <Text style={{ fontWeight: "bold" }}>F</Text>
            <Text>{date} </Text>
          </View>
        );
      case 6:
        return (
          <View>
            <Text style={{ fontWeight: "bold" }}>S </Text>
            <Text>{date} </Text>
          </View>
        );
    }
  };
  //--------------------------------------------------------------------------------------------------------------------------------
  // console.log("asd", dayLabel(new Date(crying_data[0].date).getDay()));

  const babyCryingData = [
    [
      { startTime: "12:00 AM" },
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
      { startTime: "12:00 PM" },
      { startTime: "1:00 PM" },
      { startTime: "2:00 PM" },
      { startTime: "3:00 PM" },
      { startTime: "4:00 PM" },
      { startTime: "5:00 PM" },
      { startTime: "6:00 PM" },
      { startTime: "7:00 PM" },
      { startTime: "8:00 PM" },
      { startTime: "9:00 PM" },
      { startTime: "10:00 PM" },
      { startTime: "11:00 PM" },
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

  const labelByDay = (today) => {
    switch (today) {
      default:
        return {
          label: [
            <Text style={{ fontWeight: "bold" }}>LABEL</Text>,
            dayLabel(
              new Date(crying_data[0]?.date).getDay(),
              moment(crying_data[0]?.date).format("DD")
            ),
            dayLabel(
              new Date(crying_data[1]?.date).getDay(),
              moment(crying_data[1]?.date).format("DD")
            ),
            dayLabel(
              new Date(crying_data[2]?.date).getDay(),
              moment(crying_data[2]?.date).format("DD")
            ),
            dayLabel(
              new Date(crying_data[3]?.date).getDay(),
              moment(crying_data[3]?.date).format("DD")
            ),
            dayLabel(
              new Date(crying_data[4]?.date).getDay(),
              moment(crying_data[4]?.date).format("DD")
            ),
            dayLabel(
              new Date(crying_data[5]?.date).getDay(),
              moment(crying_data[5]?.date).format("DD")
            ),
            dayLabel(
              new Date(crying_data[6]?.date).getDay(),
              moment(crying_data[6]?.date).format("DD")
            ),
          ],
          data: babyCryingData[1] ? babyCryingData : SampleJson,
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
        loaderIsOpen={loaderIsOpen}
        setDataShow={setDataShow}
      />
      <HomePage
        day={day}
        setDay={setDay}
        labelByDay={labelByDay}
        styleValue={styleValue}
        profileDetail={profileDetail}
        setGettingDataDate={setGettingDataDate}
        setDataShow={setDataShow}
        dataShow={dataShow}
        setModelOpen={setModelOpen}
        {...props}
        modelOpen={modelOpen}
        averageCryingInFraction={averageCryingInFraction}
        averageVolumeInFraction={averageVolumeInFraction}
      />
    </View>
  );
};

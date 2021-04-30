import moment from "moment";
import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";

export default VerifyUser = (props) => {
  const { onChange, value, disable, editable } = props;

  const [yearValue, setYearValue] = useState(
    "" || moment(value).format("YYYY")
  );
  const [monthValue, setMonthValue] = useState(
    "" || moment(value).format("MM")
  );
  const [dayValue, setDayValue] = useState("" || moment(value).format("DD"));

  const Year = useRef();
  const Month = useRef();
  const Day = useRef();

  useEffect(() => {
    if (onChange) {
      onChange(`${yearValue}/${monthValue}/${dayValue}`);
    }
  }, [yearValue, monthValue, dayValue]);

  const yearValidate = (year) => {
    let yrs = parseInt(year);
    if (yrs < 1990 && year.length === 4) {
      console.log("thorai");
      setYearValue("1990");
    } else if (yrs > new Date().getFullYear()) {
      console.log("dherai");

      setYearValue(new Date().getFullYear().toString());
    } else {
      setYearValue(year);
    }
  };

  const monthValidate = (month) => {
    let mth = parseInt(month);

    if (mth > 12 && month.length === 2) {
      setMonthValue(new Date().getMonth().toString());
    } else {
      setMonthValue(month);
    }
  };

  const dayValidate = (day) => {
    let d = parseInt(day);
    let noOfDays = new Date(yearValue, monthValue, 0).getDate();

    if (d > noOfDays && day.length === 2) {
      setDayValue(`${noOfDays}`);
    } else {
      setDayValue(day);
    }
  };

  return (
    <View style={styles.dateInput}>
      <TextInput
        style={{ width: "33%", height: 25 }}
        maxLength={4}
        editable={editable}
        keyboardType="number-pad"
        numberOfLines={1}
        textAlign="center"
        placeholder="YYYY"
        onChangeText={(value) => {
          yearValidate(value);
          if (value.length === 4) {
            Month.current.focus();
          }
        }}
        value={yearValue}
        returnKeyType="next"
        ref={Year}
      />

      <Text style={{ fontSize: 20 }}>/</Text>

      <TextInput
        style={{ width: "33%" }}
        maxLength={2}
        editable={editable}
        keyboardType="number-pad"
        placeholder="MM"
        textAlign="center"
        onChangeText={(value) => {
          monthValidate(value);
          if (value.length === 2) {
            Day.current.focus();
          } else if (value.length === 0) {
            Year.current.focus();
          }
        }}
        value={monthValue}
        returnKeyType="next"
        ref={Month}
      />

      <Text style={{ fontSize: 20 }}>/</Text>

      <TextInput
        style={{ width: "33%", height: 25 }}
        maxLength={2}
        textAlign="center"
        keyboardType="number-pad"
        placeholder="DD"
        editable={editable}
        onChangeText={(value) => {
          dayValidate(value);
          if (value.length === 0) {
            Month.current.focus();
          }
        }}
        value={dayValue}
        ref={Day}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dateInput: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",

    width: "100%",
  },
});

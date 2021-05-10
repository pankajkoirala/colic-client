import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { View, Button, Platform, Text, TouchableOpacity } from "react-native";

export default DatePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(showDateMode);
  const { setFinalSelectedDate, showDateMode } = props;

  useEffect(() => {
    setFinalSelectedDate(moment(date).format("YYYY-MM-DD"));
  }, [date]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      {Platform.OS === "ios" && show == true ? (
        <TouchableOpacity
          style={{ alignItems: "flex-end", marginRight: 4 }}
          onPress={() => setShow(false)}
        >
          <Text> close</Text>
        </TouchableOpacity>
      ) : null}
      <View style={{ width: 400, backgroundColor: "red" }}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

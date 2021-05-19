import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Example = (props) => {
  const { openTimePicker, setOpenTimePicker, setHours, mode, editState } =
    props;

  const hideDatePicker = () => {
    setOpenTimePicker(false);
  };

  const handleConfirm = (date) => {
    setHours(date);
    hideDatePicker();
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={openTimePicker}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        textColor="black"
      />
    </View>
  );
};

export default Example;

import React, { Component, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Chat = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => console.log("pankhghg577hgaj")}
        style={{ height: 100, width: 100 }}
      ></TouchableOpacity>
    </View>
  );
};

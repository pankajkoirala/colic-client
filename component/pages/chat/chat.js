import React, { Component, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Blog = () => {
  return (
    <View
      disableFullscreenUI={true}
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
      >
        <Text>This is Chat page</Text>
      </TouchableOpacity>
    </View>
  );
};

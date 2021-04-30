import React, { Component, useState } from "react";
import { Pressable } from "react-native";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateInsert from "../../../common/dateInsert";

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
        <Text>This is blog Page</Text>
      </TouchableOpacity>
    </View>
  );
};

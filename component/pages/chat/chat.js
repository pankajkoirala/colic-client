import React, { Component, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Pegination from "./../../../common/pegination";
import { View, Text, StyleSheet } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { WebView } from "react-native-webview";

export default Chat = (props) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ height: "100%", width: "100%" }}>
        <WebView
          source={{
            //uri: "https://www.youtube.com/watch?v=8zT6CYu0iYQ",
            html: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8zT6CYu0iYQ?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          }}
          style={{ marginTop: 40, marginBottom: 40 }}
        />
      </View>
      <Text>chat page</Text>
    </View>
  );
};

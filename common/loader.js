import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import ProgressLoader from "rn-progress-loader";

export default function App(props) {
  const { setModelOpen, loaderIsOpen, setHours, mode } = props;
  return (
    <View>
      <View>
        <ProgressLoader
          visible={loaderIsOpen}
          isModal={true}
          isHUD={true}
          hudColor={"#000000"}
          color={"#FFFFFF"}
        />
      </View>
    </View>
  );
}

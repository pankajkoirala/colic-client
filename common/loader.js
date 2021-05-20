import * as React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function App({ loaderIsOpen }) {
  return (
    <View style={loaderIsOpen ? styles.loaderOpen : styles.loaderClose}>
      <ActivityIndicator animating={loaderIsOpen} size="large" color="black" />
    </View>
  );
}
const styles = StyleSheet.create({
  loaderOpen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
  loaderClose: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

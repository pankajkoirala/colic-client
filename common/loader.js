import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default Loader = (props) => {
  const { setModelOpen, loaderIsOpen, setHours, mode } = props;
  return (
    <AnimatedLoader
      visible={loaderIsOpen}
      overlayColor="rgba(245, 212, 66,0.5)"
      animationStyle={styles.lottie}
      speed={1}
    ></AnimatedLoader>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
    color: "#ffff1a",
  },
});

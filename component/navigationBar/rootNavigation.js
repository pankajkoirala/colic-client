import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./drawerNavigator";
import Stake from "./stack";
import FetchDataComponent from "./../service/fetchData";
import { useSelector } from "react-redux";
//redux
import * as Analytics from "expo-firebase-analytics";

export default function AppStack(props) {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  const { token } = useSelector((state) => ({
    token: state.token.token,
  }));
  if (!token) {
    console.log("token dekhayena");
  }

  //let token = "pankaj";
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          //Analytics.setCurrentScreen(currentRouteName);
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      {token ? (
        <>
          <DrawerNavigator />
          <FetchDataComponent />
        </>
      ) : (
        <Stake />
      )}
    </NavigationContainer>
  );
}

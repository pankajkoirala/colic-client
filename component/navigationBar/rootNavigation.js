import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./drawerNavigator";
import Stake from "./stack";
import FetchDataComponent from "./../service/fetchData";

import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native";

//redux

export default function AppStack(props) {
  const [acceptUser, setAcceptUser] = useState(null);

  const { token } = useSelector((state) => ({
    token: state.token.token,
  }));
  if (!token) {
    console.log("token dekhayena");
    console.log(token);
  }

  // let token = "pankaj";
  return (
    <NavigationContainer>
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

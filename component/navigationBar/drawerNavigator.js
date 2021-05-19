import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_TOKEN } from "../redux/action/action";
import BottomNavigator from "./buttomNav";
import { View, Image, StyleSheet, Text } from "react-native";
import { base_URL } from "../utils/const";

//import * as Screens from "../components/Screens";
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const dispatchData = () => {
    dispatch({ type: AUTH_TOKEN, payload: "" });
  };

  const { profileDetail } = useSelector((state) => ({
    profileDetail: state.profileDetail.profileDetail,
  }));

  return (
    <DrawerContentScrollView bounces={false} {...props}>
      <View style={styles.drawerContainer}>
        <View style={styles.profileImageView}>
          <Image
            source={{
              uri: base_URL + "/" + profileDetail.profileimage,
            }}
            style={styles.profileImage}
            imageStyle={{
              resizeMode: "cover",
            }}
          />
          <Text style={styles.usersName}>{profileDetail.name}</Text>
        </View>

        <DrawerItem
          style={styles.drawerMenu}
          labelStyle={styles.drawerMenuItem}
          label="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          style={styles.drawerMenu}
          labelStyle={styles.drawerMenuItem}
          label="Profile"
          onPress={() => props.navigation.navigate("Profile")}
        />
        <DrawerItem
          style={styles.drawerMenu}
          labelStyle={styles.drawerMenuItem}
          label="file"
          onPress={() => props.navigation.navigate("ContactUs")}
        />
        <DrawerItem
          style={styles.drawerMenu}
          labelStyle={styles.drawerMenuItem}
          label="blog"
          onPress={() => props.navigation.navigate("Blog")}
        />
        <DrawerItem
          style={styles.drawerMenu}
          labelStyle={styles.drawerMenuItem}
          label="Log Out"
          onPress={() => dispatchData()}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={"bottomnav"}
        component={BottomNavigator}
        key={"name"}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: { paddingTop: 30 },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: 0.5,
    margin: 12,
  },
  profileImageView: {
    height: 150,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: 'red'
  },
  usersName: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  drawerMenu: {
    backgroundColor: "#2123",
  },
  drawerMenuItem: {
    padding: 5,
    //alignItems: "center",
    //fontFamily: "Montserrat",
    textAlign: "center",
  },
});

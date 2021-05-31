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
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

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
    <DrawerContentScrollView
      style={{ backgroundColor: "#ffad33" }}
      bounces={false}
      {...props}
    >
      <Text style={{ textAlign: "center", fontSize: 60, fontWeight: "bold" }}>
        Colic
      </Text>
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
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5Icon name={"paper-plane"} size={20} />
            <Text style={{ paddingHorizontal: 4, fontWeight: "bold" }}>
              {profileDetail.email}
            </Text>
          </View>
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
  drawerContainer: { paddingTop: 10 },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "black",
    shadowOpacity: 0.5,
    margin: 12,
  },
  profileImageView: {
    height: 180,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: 'red'
  },
  usersName: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 4,
  },
  drawerMenu: {
    width: "80%",
    backgroundColor: "#ff9900",
    alignSelf: "center",
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
  },
  drawerMenuItem: {
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },
});

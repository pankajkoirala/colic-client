import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { AUTH_TOKEN } from "../redux/action/action";
import BottomNavigator from "./buttomNav";
import { View, Image, StyleSheet } from "react-native";

//import * as Screens from "../components/Screens";
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const dispatchData = () => {
    dispatch({ type: AUTH_TOKEN, payload: "" });
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileImageView}>
        <Image
          source={{
            uri: "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          }}
          style={styles.profileImage}
          imageStyle={{
            resizeMode: "cover",
          }}
        />
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
        label="contact us"
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
  drawerMenu: {
    backgroundColor: "#2123",
  },
  drawerMenuItem: {
    padding: 5,
    alignItems: "center",
    //fontFamily: "Montserrat",
    textAlign: "center",
  },
});

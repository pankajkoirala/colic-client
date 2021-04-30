import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlogPage from "../pages/blog/blog";
import ContactUs from "../pages/contactus/contactus";
import Profile from "./../pages/profile/profileContainer";
import Stake from "./stack";
import Chat from "../pages/chat/chatContainer";
import { Text, View, Animated } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from "../pages/homepage/homepageContainer";
//import * as Screens from "../components/Screens";
const Bottom = createBottomTabNavigator();

const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome5);

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let opacityValue = new Animated.Value(0);
        let marginValue = new Animated.Value(0);
        let bgColorValue = new Animated.Value(0);
        let iconValue = new Animated.Value(0);

        useEffect(() => {
          Animated.parallel([
            Animated.spring(bgColorValue, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.spring(iconValue, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.spring(marginValue, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.spring(opacityValue, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }),
          ]).start();
        }, [state]);

        function animateOpacity() {
          // marginValue.setValue( -20);
          Animated.parallel(
            [
              Animated.timing(bgColorValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.timing(iconValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.timing(marginValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.timing(opacityValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),
            ],
            { stopTogether: true }
          ).start(() => {
            Animated.parallel([
              Animated.spring(bgColorValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.spring(iconValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.spring(marginValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.spring(opacityValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }),
            ]).start(() => {
              // const event = navigation.emit({
              //   type: 'tabPress',
              //   target: route.key,
              //   canPreventDefault: true,
              // });
              if (!isFocused) {
                navigation.navigate(route.name);
              }
            });
          });
        }

        let marginal = marginValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -10],
        });

        let opacity = opacityValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        });

        let bgColor = bgColorValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["#f7f7f7", "#2E7F9F"],
        });

        let iconColor = iconValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["#2E7F9F", "#f7f7f7"],
        });

        const onPress = () => {
          animateOpacity();
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 4,
              height: 50,
            }}
          >
            <Animated.Text
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                color: isFocused ? "#ffff" : "#222",
                margin: 2,
                transform: [
                  {
                    translateY: marginal,
                  },
                ],
                color: iconColor,
                opacity: opacity,
              }}
            >
              {/* {label} */}
              <AnimatedIcon name={route.name} size={35} color="#000000" />
            </Animated.Text>
          </View>
        );
      })}
    </View>
  );
}

export default function BottomNavigator(props) {
  return (
    <Bottom.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Bottom.Screen
        name={"comments"}
        component={Stake}
        key={"chat"}
        {...props}
      />
      <Bottom.Screen
        name={"file"}
        component={ContactUs}
        key={"file"}
        {...props}
      />
      <Bottom.Screen name={"home"} component={Home} key={"home"} {...props} />
      <Bottom.Screen
        name={"blogger"}
        component={BlogPage}
        key={"blog"}
        {...props}
      />
      <Bottom.Screen
        name={"cog"}
        component={Profile}
        key={"setting"}
        {...props}
      />
    </Bottom.Navigator>
  );
}

import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Stake, {
  ProfileStack,
  HomePageStack,
  BlogStack,
  FileStack,
} from "./stack";
import { Text, View, Animated } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
              duration: 400,
              useNativeDriver: false,
            }),
            Animated.spring(iconValue, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }),
            Animated.spring(marginValue, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }),
            Animated.spring(opacityValue, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }),
          ]).start();
        }, [state]);

        function animateOpacity() {
          Animated.parallel(
            [
              Animated.timing(bgColorValue, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.timing(iconValue, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.timing(marginValue, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.timing(opacityValue, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
              }),
            ],
            { stopTogether: true }
          ).start(() => {
            Animated.parallel([
              Animated.spring(bgColorValue, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.spring(iconValue, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.spring(marginValue, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.spring(opacityValue, {
                toValue: 0,
                duration: 400,
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
          outputRange: [0, -20],
        });

        let opacity = opacityValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        });

        let bgColor = bgColorValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["white", "black"],
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
                color: isFocused ? "#ffff" : "",
                transform: [
                  {
                    translateY: marginal,
                  },
                ],
                color: iconColor,
                opacity: opacity,
              }}
            >
              <AnimatedIcon name={route.name} size={30} color="#000000" />
            </Animated.Text>
            <Animated.Text
              style={{
                color: bgColor,
                fontWeight: "bold",
                marginBottom: -12,
                transform: [
                  {
                    translateY: marginal,
                  },
                ],
              }}
            >
              {label}
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
        component={FileStack}
        key={"file"}
        {...props}
      />
      <Bottom.Screen
        name={"home"}
        component={HomePageStack}
        key={"home"}
        {...props}
      />
      <Bottom.Screen
        name={"blogger"}
        component={BlogStack}
        key={"blog"}
        {...props}
      />
      <Bottom.Screen
        name={"cog"}
        component={ProfileStack}
        key={"setting"}
        options={({ route }) => {
          return {
            icon: "local-hospital",
          };
        }}
        {...props}
      />
    </Bottom.Navigator>
  );
}

import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Text, FAB } from "react-native-elements";
import DateModel from "./../../../common/ModelDateInsert/datePicker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { base_URL } from "../../utils/const";
import BgImage from "./../../../assets/chartBGimage.jpg";

export default ExampleTwo = (props) => {
  const [showDateMode, setShowDateMode] = useState(true);
  const {
    day,
    setDay,
    styleValue,
    labelByDay,
    profileDetail,
    getCrying_dataByDay,
    setGettingDataDate,
    setDataShow,
  } = props;

  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <ImageBackground
          source={BgImage}
          imageStyle={{
            resizeMode: "cover",
          }}
          style={{
            width: "100%",
          }}
        >
          <View style={styles.editBack}>
            <View style={styles.menuNameView}>
              <FontAwesome5
                onPress={() => props.navigation.openDrawer()}
                name={"bars"}
                size={35}
              />
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                {profileDetail.name}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Image
                source={{
                  uri: `${base_URL}/${profileDetail.profileimage}`,
                }}
                style={styles.profileImg}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 30,
                fontFamily: "Montserrat",
                color: "grey",
                paddingBottom: 30,
              }}
            >
              here is your baby's reading
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  // paddingLeft: 30,
                  fontFamily: "Montserrat",
                  color: "grey",
                  // paddingBottom: 30,
                }}
              >
                Average Crying
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  // paddingLeft: 30,
                  fontFamily: "Montserrat",
                  color: "black",
                  // paddingBottom: 30,
                  textAlign: "center",
                  paddingVertical: 4,
                }}
              >
                4/3
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  // paddingLeft: 30,
                  fontFamily: "Montserrat",
                  color: "grey",
                  // paddingBottom: 30,
                }}
              >
                Average Volume
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  // paddingLeft: 30,
                  fontFamily: "Montserrat",
                  color: "black",
                  // paddingBottom: 30,
                  textAlign: "center",
                  paddingVertical: 4,
                }}
              >
                4/3
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <Text
              onPress={() => setDataShow(true)}
              style={{
                fontFamily: "Montserrat",
                color: "grey",
                fontSize: 18,
                paddingHorizontal: 20,
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
              }}
            >
              today
            </Text>
            <Text
              onPress={() => setDataShow(false)}
              style={{
                fontFamily: "Montserrat",
                color: "grey",
                fontSize: 18,
                paddingHorizontal: 20,
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
              }}
            >
              weekly
            </Text>
          </View>
          <Text onPress={() => setShowDateMode(!showDateMode)}>
            Date Select
          </Text>
        </ImageBackground>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {labelByDay(day)?.label.map((arg, i) => {
            return (
              <Text
                style={
                  i === 0
                    ? {
                        width: "20%",
                        textAlign: "center",
                        marginVertical: 6,
                        fontFamily: "Montserrat",
                        fontSize: 20,
                      }
                    : {
                        width: "10.5%",
                        textAlign: "center",
                        marginVertical: 6,
                        fontFamily: "Montserrat",
                        fontSize: 20,
                      }
                }
                key={i}
              >
                {arg}
              </Text>
            );
          })}
        </View>
        <ScrollView
          style={{
            width: "100%",
            height: 500,
          }}
          //bounces={true}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginLeft: -16,
            }}
          >
            {labelByDay(day)?.data.map((arg, i) => {
              return (
                <View key={i}>
                  {labelByDay(day)?.data[0].map((arg1, ind) => {
                    return (
                      <Text key={ind} style={styleValue(arg, i, ind, styles)}>
                        {i === 0 ? arg[ind].startTime : arg[ind].intensity}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 999,
          }}
        >
          <DateModel
            showDateMode={showDateMode}
            setFinalSelectedDate={setGettingDataDate}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log("add data")}
          style={{
            flex: 1,
            justifyContent: "center",
            height: 50,
            width: 50,
            backgroundColor: "red",
            borderRadius: 30,
            position: "absolute",
            alignSelf: "flex-end",
            bottom: 20,
            right: 20,
          }}
        >
          <FontAwesome5
            style={{
              alignSelf: "center",
            }}
            name="plus"
            size={30}
            color="#ffff"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%", backgroundColor: "#fff" },
  head: { height: 40, width: "100%", backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { backgroundColor: "#f6f8fa" },
  row: { height: 30, width: "100%" },
  text: { textAlign: "center" },
  valueOne: {
    marginHorizontal: 20,
    padding: 4,
    height: 40,
    textAlign: "center",
    backgroundColor: "#00cc44",
    color: "#00cc44",
  },
  valueTwo: {
    marginHorizontal: 20,
    padding: 4,
    height: 40,
    textAlign: "center",
    backgroundColor: "#99cc00",
    color: "#99cc00",
  },
  valueThree: {
    marginHorizontal: 20,
    padding: 4,
    height: 40,
    textAlign: "center",
    backgroundColor: "#ffff00",
    color: "#ffff00",
  },
  valueFour: {
    marginHorizontal: 20,
    padding: 4,
    height: 40,
    textAlign: "center",
    backgroundColor: "#ff704d",
    color: "#ff704d",
  },
  valueFive: {
    marginHorizontal: 20,
    padding: 4,
    height: 40,
    textAlign: "center",
    backgroundColor: "#ff3300",
    color: "#ff3300",
  },
  valueNone: {
    marginHorizontal: 20,
    padding: 4,
    height: 40,
    textAlign: "center",
    backgroundColor: "white",
    color: "white",
  },
  valueLabel: {
    marginHorizontal: 20,
    padding: 4,
    height: 40,
    textAlign: "center",
    color: "black",
    // backgroundColor: "grey",
    fontFamily: "Montserrat",
    fontSize: 15,
  },
  editBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  editText: {
    fontSize: 25,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  menuNameView: {
    flexDirection: "row",
  },
});

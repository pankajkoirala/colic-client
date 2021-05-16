import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Text, FAB } from "react-native-elements";
import DateModel from "./../../../common/ModelDateInsert/datePicker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { base_URL } from "../../utils/const";
import BgImage from "./../../../assets/chartBGimage.jpg";

export default ExampleTwo = (props) => {
  const [showDateMode, setShowDateMode] = useState(false);

  const {
    day,
    styleValue,
    labelByDay,
    profileDetail,
    setDataShow,
    setModelOpen,
    modelOpen,
    setGettingDataDate,
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
              <Text style={styles.userName}>{profileDetail.name}</Text>
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
            <Text style={styles.babyReading}>here is your baby's reading</Text>
          </View>
          <View style={styles.averageCryingView}>
            <View>
              <Text style={styles.averageCryingLabel}>Average Crying</Text>

              <Text style={styles.averageCryingValue}>4/3</Text>
            </View>
            <View>
              <Text style={styles.averageCryingLabel}>Average Volume</Text>
              <Text style={styles.averageCryingValue}>4/3</Text>
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
            <TouchableOpacity onPress={() => setDataShow(true)}>
              <Text style={styles.todayeeklyCall}>today</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDataShow(false)}>
              <Text style={styles.todayeeklyCall}>weekly</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <FontAwesome5
              name="calendar"
              size={30}
              onPress={() => setShowDateMode(!showDateMode)}
            />
          </TouchableOpacity>
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
                  i === 0 ? styles.indexEqualToZero : styles.indexNotEqualToZero
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

        <View style={styles.addCryingDataIconView}>
          <DateModel
            setOpenTimePicker={() => setShowDateMode()}
            openTimePicker={showDateMode}
            mode={"date"}
            setHours={setGettingDataDate}
          />
        </View>
        <TouchableOpacity
          onPress={() => setModelOpen(true)}
          style={styles.addCryingDataIcon}
        >
          <FontAwesome5
            style={styles.plusInto}
            name={modelOpen ? "times" : "plus"}
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
    fontSize: 15,
  },
  editBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
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
  userName: {
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  babyReading: {
    fontSize: 20,
    paddingLeft: 30,
    color: "grey",
    paddingBottom: 30,
  },
  averageCryingView: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
  },
  averageCryingLabel: {
    fontSize: 18,
    color: "grey",
  },
  averageCryingValue: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    paddingVertical: 4,
  },
  todayeeklyCall: {
    color: "grey",
    fontSize: 18,
    paddingHorizontal: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  indexEqualToZero: {
    width: "20%",
    textAlign: "center",
    marginVertical: 6,
    fontSize: 20,
  },
  indexNotEqualToZero: {
    width: "10.5%",
    textAlign: "center",
    marginVertical: 6,
    fontSize: 20,
  },
  addCryingDataIcon: {
    flex: 1,
    justifyContent: "center",
    height: 50,
    width: 50,
    backgroundColor: "#ffc61a",
    borderRadius: 30,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 20,
    right: 20,
  },
  addCryingDataIconView: {
    position: "absolute",
    bottom: 0,
    zIndex: 999,
  },
  plusInto: {
    alignSelf: "center",
  },
});

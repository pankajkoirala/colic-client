import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
  Dimensions
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
    averageCryingInFraction,
    averageVolumeInFraction,
    dataShow,
  } = props;
  var { width, height } = Dimensions.get("window");

  return (
    <View>
      {/* <ScrollView scrollEnabled={!false} bounces={false}> */}
      <View style={{
        height: height,
        width: "100%",
        backgroundColor: "#fff",
        paddingBottom: 60,
        // flex: 1,
      }}>
        <ImageBackground
          source={BgImage}
          imageStyle={{
            resizeMode: "cover",
          }}
          style={{
            width: "100%",
          }}
        >
          <View style={Platform.OS === 'ios' ? styles.editBackIOS : styles.editBackAndroid}>
            <View style={styles.menuNameView}>
              <FontAwesome5
                onPress={() => props.navigation.openDrawer()}
                name={"bars"}
                size={30}
              />
              <Text style={styles.userName}>{profileDetail.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Image
                source={{
                  uri: base_URL + "/" + profileDetail.profileimage,
                }}
                style={styles.profileImage}
                imageStyle={{
                  resizeMode: "cover",
                }}
              />
            </TouchableOpacity>
          </View>

          {/*   <View>
              <Text style={styles.babyReading}>
                here is your baby's reading
              </Text>
         </View>*/}
          <View style={styles.averageCryingView}>
            <View>
              <Text style={styles.averageCryingLabel}>Average Crying</Text>

              <Text style={styles.averageCryingValue}>
                {averageCryingInFraction}
              </Text>
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
            <View>
              <Text style={styles.averageCryingLabel}>Average Volume</Text>
              <Text style={styles.averageCryingValue}>
                {averageVolumeInFraction}
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
            <TouchableOpacity onPress={() => setDataShow(true)}>
              <Text
                style={
                  !dataShow
                    ? styles.todayWeeklyCall
                    : styles.todayWeeklyCallSelected
                }
              >
                today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDataShow(false)}>
              <Text
                style={
                  dataShow
                    ? styles.todayWeeklyCall
                    : styles.todayWeeklyCallSelected
                }
              >
                weekly
              </Text>
            </TouchableOpacity>
          </View>
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
                    ? styles.indexEqualToZero
                    : styles.indexNotEqualToZero
                }
                key={i}
              >
                {arg}
              </Text>
            );
          })}
        </View>
        <ScrollView
          scrollEnabled={true}

          bounces={false}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              height: '100%',
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
      </View>
      {/* </ScrollView> */}
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
  );
};

const styles = StyleSheet.create({
  // container: {
  //   height: "100%",
  //   width: "100%",
  //   backgroundColor: "#fff",
  //   paddingBottom: 20,
  //   flex: 1,
  // },

  valueOne: {
    marginHorizontal: 20,
    padding: 4,
    height: 38,
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
    fontSize: 16,
    fontWeight: "bold",
  },
  editBackAndroid: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  editBackIOS: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  editText: {
    fontSize: 25,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "black",
    shadowOpacity: 0.5,
    margin: 4,
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
  todayWeeklyCall: {
    color: "grey",
    fontSize: 18,
    paddingHorizontal: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontWeight: "bold",
  },
  todayWeeklyCallSelected: {
    color: "#ffc61a",
    fontSize: 18,
    paddingHorizontal: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontWeight: "bold",
  },

  indexEqualToZero: {
    width: "20%",
    textAlign: "center",
    marginVertical: 6,
    fontSize: 18,
    // backgroundColor: 'red'
  },
  indexNotEqualToZero: {
    textAlign: "center",
    marginHorizontal: 11,
    marginVertical: 6,
    fontSize: 20,
  },
  addCryingDataIcon: {
    justifyContent: "center",
    height: 50,
    width: 50,
    backgroundColor: "#ffc61a",
    borderRadius: 30,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 70,
    right: 20,
  },
  addCryingDataIconView: {
    position: "absolute",
    bottom: 0,
    //zIndex: 999,
  },
  plusInto: {
    alignSelf: "center",
  },
});

import moment from "moment";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";

export default SingleBlogView = (props) => {
  const { id } = props.route.params;
  console.log("🚀 ~ file: detailView.js ~ line 7 ~ id", id);
  const { blogs_data, profileDetail } = useSelector((state) => ({
    blogs_data: state.blogs_data.blogs_data,
    profileDetail: state.profileDetail.profileDetail,
  }));

  const selectedBlog = blogs_data.filter((arg) => arg.id === id)[0];
  console.log(
    "🚀 ~ file: detailView.js ~ line 14 ~ selectedBlog",
    selectedBlog
  );
  return (
    <View style={{ paddingTop: 50, paddingBottom: 70, paddingHorizontal: 10 }}>
      <View style={styles.editBack}>
        <View style={styles.menuNameView}>
          <FontAwesome5Icon
            onPress={() => props.navigation.navigate("Blog")}
            name={"arrow-left"}
            size={25}
          />
        </View>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {selectedBlog.title}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Image
            source={{
              uri: `https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png`,
            }}
            style={styles.profileImg}
          />
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false}>
        <Text
          style={{
            paddingBottom: 10,
            color: "#999966",
            fontSize: 16,
            textTransform: "capitalize",
          }}
        >
          {`${selectedBlog.author}, ${moment(selectedBlog.posteddate).format(
            "DD MMM YYYY"
          )}`}
        </Text>
        <Text style={{ textAlign: "justify" }}>{selectedBlog.content}</Text>
        <View style={{ paddingTop: 10 }}>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {"Source : "}
            <Text
              style={{
                textTransform: "capitalize",
              }}
            >
              {selectedBlog.source}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  editBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
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

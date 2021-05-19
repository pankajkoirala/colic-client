import moment from "moment";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView, useWindowDimensions } from "react-native";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import HTML from "react-native-render-html";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { base_URL } from "../../utils/const";
export default SingleBlogView = (props) => {
  const { id } = props.route.params;
  const { blogs_data, profileDetail } = useSelector((state) => ({
    blogs_data: state.blogs_data.blogs_data,
    profileDetail: state.profileDetail.profileDetail,
  }));

  const selectedBlog = blogs_data.filter((arg) => arg.id === id)[0];
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.blogDetailContainer}>
      <View style={styles.editBack}>
        <View style={styles.menuNameView}>
          <FontAwesome5Icon
            onPress={() => props.navigation.navigate("Blog")}
            name={"arrow-left"}
            size={25}
          />
        </View>
        <Text style={styles.blogTitle}>{selectedBlog.title}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Image
            source={{
              uri: `${base_URL}/${profileDetail.profileimage}`,
            }}
            style={styles.profileImg}
          />
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false}>
        <View
          style={{
            paddingHorizontal: 6,
          }}
        >
          <Text style={styles.blogPostedDate}>
            {`${selectedBlog.author}, ${moment(selectedBlog.posteddate).format(
              "DD MMM YYYY"
            )}`}
          </Text>
          <Text style={styles.blogContent}>
            <HTML
              source={{ html: selectedBlog.content }}
              contentWidth={contentWidth}
            />
          </Text>
          <View style={styles.sourceView}>
            <Text style={styles.sourceText}>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  blogDetailContainer: {
    paddingTop: 50,
    paddingBottom: 70,
    paddingHorizontal: 10,
  },

  editBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  menuNameView: {
    flexDirection: "row",
  },
  blogTitle: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    textTransform: "capitalize",
  },
  blogPostedDate: {
    paddingBottom: 10,
    color: "#999966",
    fontSize: 16,
    textTransform: "capitalize",
  },
  blogContent: { textAlign: "justify" },
  sourceView: { paddingTop: 10 },
  sourceText: {
    fontSize: 16,
  },
});

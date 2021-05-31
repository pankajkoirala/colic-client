import moment from "moment";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView, useWindowDimensions } from "react-native";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import HTML from "react-native-render-html";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { base_URL } from "../../utils/const";
import { blogViewAPI } from "../../service/blog";

export default SingleBlogView = (props) => {
  const { id } = props.route.params;
  const { blogs_data, profileDetail } = useSelector((state) => ({
    blogs_data: state.blogs_data.blogs_data,
    profileDetail: state.profileDetail.profileDetail,
  }));
  useEffect(() => {
    blogViewAPI(id);
  }, []);
  const selectedBlog = blogs_data.filter((arg) => arg.id === id)[0];
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.blogDetailContainer}>
      <View style={styles.editBack}>
        <View>
          <FontAwesome5Icon
            onPress={() => props.navigation.navigate("Blog")}
            name={"arrow-left"}
            size={25}
          />
        </View>
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
          <Text style={styles.blogTitle}>{selectedBlog.title}</Text>
          <View
            style={{
              marginTop: 4,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.blogPostedDate}>{selectedBlog.author}</Text>
            <Text>{moment(selectedBlog.posteddate).format("DD MMM YYYY")}</Text>
          </View>
          <HTML
            tagsStyles={{
              h1: {
                textAlign: "justify",
                width: "100%",
              },
              h2: {
                textAlign: "justify",
                width: "100%",
              },
              h3: {
                textAlign: "justify",
                width: "100%",
              },
              h4: {
                textAlign: "justify",
                width: "100%",
              },
              h5: {
                textAlign: "justify",
                width: "100%",
              },
              h6: {
                textAlign: "justify",
                width: "100%",
              },
              b: {
                textAlign: "justify",
                width: "100%",
              },
              p: {
                textAlign: "justify",
                width: "100%",
              },
            }}
            source={{ html: selectedBlog.content }}
            contentWidth={contentWidth}
          />
          {selectedBlog.category === "video" && (
            <WebView
              scrollEnabled={false}
              source={{
                html: selectedBlog.videolink ? selectedBlog.videolink : "",
              }}
              style={{
                width: "100%",
                height: 240,
                alignSelf: "center",
              }}
            />
          )}
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
    paddingTop: 20,
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

  blogTitle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  sourceView: { paddingTop: 10 },
  sourceText: {
    fontSize: 16,
  },
});

import moment from "moment";
import { WebView } from "react-native-webview";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Dimensions,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HTML from "react-native-render-html";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default Blogs_video = (props) => {
  const { blogs_video, pageNumber, callNextPage, callPrePage } = props;
  const contentWidth = useWindowDimensions().width;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = blogs_video?.slice(indexOfFirstPost, indexOfLastPost);
  var { width, height } = Dimensions.get("window");
  return (
    <ScrollView
      bounces={false}
      style={{
        flex: 1,
        width: width,
        height: "100%",
        // marginBottom: 50
      }}
    >
      <View style={styles.Category1Container}>
        {currentPost?.length ? (
          <View style={{}}>
            {currentPost?.map((arg, i) => {
              return (
                <View key={i}>
                  <View key={i} style={styles.allBlogViewEven}>
                    <View>
                      <Text style={styles.blogPostedDate}>
                        {moment(arg.posteddate).format("DD MMM YYYY")}
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate("SingleBlogView", {
                            id: arg.id,
                          })
                        }
                      >
                        <Text style={styles.blogTitle}> {arg.title}</Text>
                      </TouchableOpacity>
                      <HTML
                        source={{ html: arg.content.slice(0, 150) }}
                        contentWidth={contentWidth}
                      />
                      <WebView
                        scrollEnabled={false}
                        source={{
                          html: arg.videolink ? arg.videolink : "",
                        }}
                        style={{
                          width: "100%",
                          height: 240,
                          alignSelf: "center",
                        }}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <View style={{ height: height - height * 0.30 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 30,
                textAlign: "center",
              }}
            >
              No Video Found
            </Text>
          </View>
        )}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => callPrePage()}
            style={styles.nextPre}
          >
            <FontAwesome5 name="chevron-left" size={25} />
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              height: 32,
              width: 32,
              backgroundColor: "#ffb84d",

              marginHorizontal: 4,
              borderRadius: 4,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {pageNumber}
            </Text>
          </View>
          <TouchableOpacity
            disabled={!currentPost.length}
            onPress={() => callNextPage()}
            style={styles.nextPre}
          >
            <FontAwesome5 name="chevron-right" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  allBlogViewEven: {
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: "#e6e6e6",
    margin: 4,
    borderRadius: 10,
  },
  blogPostedDate: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#999966",
  },
  blogTitle: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4d4d33",
    textTransform: "capitalize",
  },
  //-------------------------
  Category1Container: {
    flex: 1,
    paddingTop: 10,
    // paddingBottom: 120,
  },

  allBlogViewOdd: {
    flexDirection: "row-reverse",
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: "#e6e6e6",
    margin: 4,
    borderRadius: 10,
  },

  blogContant: {
    textTransform: "capitalize",
    textAlign: "justify",
  },
  blogAuthor: {
    textTransform: "capitalize",
  },
  blogSource: {
    textTransform: "capitalize",
  },
  blogImg: {
    height: 200,
    width: "100%",
  },
  firstBlogBox: {
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: -30,
    marginBottom: 16,
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    width: "80%",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  otherBlogImg: {
    height: 220,
    marginRight: 2,
    width: "50%",
    borderRadius: 8,
  },
  otherBlogText: {
    width: "50%",
    // height: 200,
    marginLeft: 2,
    marginRight: 4
  },
  nextPre: {
    height: 32,
    width: 32,
    backgroundColor: "#ffe0b3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

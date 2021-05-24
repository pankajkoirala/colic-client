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
import Pegination from "../../../common/pegination";
import { base_URL } from "../../utils/const";

export default Blogs_video = (props) => {
  const { blogs_video } = props;
  const contentWidth = useWindowDimensions().width;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = blogs_video?.slice(indexOfFirstPost, indexOfLastPost);
  var { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        paddingTop: 2,
        height: height - 90,
      }}
      bounces={false}
    >
      <View style={styles.Category1Container}>
        <ScrollView
          bounces={false}
          style={{
            flex: 1,
            width: width,
          }}
        >
          {currentPost.map((arg, i) => {
            console.log(arg.videolink);
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
                    <WebView
                      scrollEnabled={false}
                      source={{
                        //uri: "https://youtu.be/dx4Teh-nv3A?t=9",
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
        </ScrollView>
        <View style={{ width: width, height: 50 }}>
          <Pegination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            maxPage={
              Math.ceil(blogs_video.length / postPerPage) === 0
                ? 1
                : Math.ceil(blogs_video.length / postPerPage)
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Category1Container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 40,
  },
  allBlogViewEven: {
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: "#e6e6e6",
    margin: 4,
    borderRadius: 10,
  },
  allBlogViewOdd: {
    flexDirection: "row-reverse",
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
    height: 200,
    marginLeft: 2,
  },
});

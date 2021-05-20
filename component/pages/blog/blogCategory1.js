import moment from "moment";
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
import Pegination from "./../../../common/pegination";

export default Category1 = (props) => {
  const { blogs_data } = props;
  const contentWidth = useWindowDimensions().width;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = blogs_data?.slice(indexOfFirstPost, indexOfLastPost);
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
            return (
              <View>
                {i === 0 ? (
                  <View>
                    <Image
                      style={styles.blogImg}
                      source={{
                        uri: "https://coopervision.com/sites/coopervision.com/files/styles/cv_blog_large/public/blog-post-images/cv_blogs_cry.jpg?itok=BPd0HsZf&timestamp=1446052149",
                      }}
                    />
                    <View style={styles.firstBlogBox}>
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
                        source={{ html: arg.content.slice(0, 200) }}
                        contentWidth={contentWidth}
                      />
                    </View>
                  </View>
                ) : (
                  <View
                    key={i}
                    style={
                      i % 2 !== 0
                        ? styles.allBlogViewEven
                        : styles.allBlogViewOdd
                    }
                  >
                    <Image
                      style={styles.otherBlogImg}
                      source={{
                        uri: "https://coopervision.com/sites/coopervision.com/files/styles/cv_blog_large/public/blog-post-images/cv_blogs_cry.jpg?itok=BPd0HsZf&timestamp=1446052149",
                      }}
                    />
                    <View style={styles.otherBlogText}>
                      <Text style={styles.blogPostedDate}>
                        {moment(arg.posteddate).format("DD MMM YYYY")}
                      </Text>
                      <Text
                        onPress={() =>
                          props.navigation.navigate("SingleBlogView", {
                            id: arg.id,
                          })
                        }
                        style={styles.blogTitle}
                      >
                        {arg.title}
                      </Text>
                      <Text style={styles.blogContant}>
                        <HTML
                          source={{ html: arg.content.slice(0, 200) }}
                          contentWidth={contentWidth}
                        />
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
        <View style={{ width: width, height: 50 }}>
          <Pegination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            maxPage={Math.ceil(blogs_data.length / postPerPage)}
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
    flexDirection: "row",
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

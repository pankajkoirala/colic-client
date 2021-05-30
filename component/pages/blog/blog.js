import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Blogs_blogs from "./blogs_blogs";
import Blogs_reaearch from "./blogs_research";
import Blogs_video from "./blogs_video";

export default Blog = (props) => {
  const [category, setCategory] = useState("blogs");
  const { blogs_data } = props;

  return (
    <View style={styles.blogContainer}>
      <View style={styles.editBack}>
        <View style={styles.menuNameView}>
          <FontAwesome5Icon
            onPress={() => props.navigation.goBack()}
            name={"arrow-left"}
            size={20}
          />
        </View>
      </View>
      <View style={styles.categoryView}>
        <TouchableOpacity
          onPress={() => setCategory("blogs")}
          style={
            category === "blogs"
              ? styles.selectCategory
              : styles.nonSelectCategory
          }
        >
          <Text
            style={
              category === "blogs"
                ? styles.selectedCategoryText
                : styles.nonselectedCategoryText
            }
          >
            Blog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategory("research")}
          style={
            category === "research"
              ? styles.selectCategory
              : styles.nonSelectCategory
          }
        >
          <Text
            style={
              category === "research"
                ? styles.selectedCategoryText
                : styles.nonselectedCategoryText
            }
          >
            Research
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategory("video")}
          style={
            category === "video"
              ? styles.selectCategory
              : styles.nonSelectCategory
          }
        >
          <Text
            style={
              category === "video"
                ? styles.selectedCategoryText
                : styles.nonselectedCategoryText
            }
          >
            Video
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {category === "blogs" ? (
          <Blogs_blogs
            blogs_blogs={blogs_data?.filter((arg) => arg.category === "blog")}
            {...props}
          />
        ) : null}
        {category === "research" ? (
          <Blogs_reaearch
            blogs_research={blogs_data?.filter(
              (arg) => arg.category === "research"
            )}
            {...props}
          />
        ) : null}
        {category === "video" ? (
          <Blogs_video
            blogs_video={blogs_data?.filter((arg) => arg.category === "video")}
            {...props}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blogContainer: { paddingTop: 20, height: "100%", paddingBottom: 50 },
  categoryView: {
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "#b8b894",
    borderBottomWidth: 1,
  },
  selectCategory: {
    width: 100,
    borderBottomColor: "#ffd11a",
    borderBottomWidth: 3,
  },
  nonSelectCategory: {
    width: 100,
    borderBottomColor: "#ffd11a",
    borderBottomWidth: 0,
  },
  nonselectedCategoryText: {
    paddingBottom: 4,
    textAlign: "center",
    fontSize: 18,
  },
  selectedCategoryText: {
    paddingBottom: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  editBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
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

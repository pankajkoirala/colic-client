import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { base_URL } from "../../utils/const";
import CategoryScreen1 from "./blogCategory1";
import CategoryScreen2 from "./blogCategory2";
import CategoryScreen3 from "./blogCategory3";

export default Blog = (props) => {
  const [category, setCategory] = useState("category1");
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
          onPress={() => setCategory("category1")}
          style={
            category === "category1"
              ? styles.selectCategory
              : styles.nonSelectCategory
          }
        >
          <Text style={{ paddingBottom: 4, textAlign: "center" }}>Blog </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategory("category2")}
          style={
            category === "category2"
              ? styles.selectCategory
              : styles.nonSelectCategory
          }
        >
          <Text style={{ paddingBottom: 4, textAlign: "center" }}>
            Research{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategory("category3")}
          style={
            category === "category3"
              ? styles.selectCategory
              : styles.nonSelectCategory
          }
        >
          <Text style={{ paddingBottom: 4, textAlign: "center" }}>Video </Text>
        </TouchableOpacity>
      </View>
      <View>
        {category === "category1" ? (
          <CategoryScreen1 blogs_data={blogs_data} {...props} />
        ) : null}
        {category === "category2" ? (
          <CategoryScreen2 blogs_data={blogs_data} {...props} />
        ) : null}
        {category === "category3" ? (
          <CategoryScreen3 blogs_data={blogs_data} {...props} />
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

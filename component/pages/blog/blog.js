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
  const { profileDetail, blogs_data } = props;

  return (
    <View style={{ paddingTop: 20, height: "100%", paddingBottom: 50 }}>
      <View style={styles.editBack}>
        <View style={styles.menuNameView}>
          <FontAwesome5Icon
            onPress={() => props.navigation.goBack()}
            name={"arrow-left"}
            size={25}
          />
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Image
            source={{
              uri: `https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png`,
            }}
            style={styles.profileImg}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          justifyContent: "space-between",
          flexDirection: "row",
          borderBottomColor: "#b8b894",
          borderBottomWidth: 2,
        }}
      >
        <TouchableOpacity
          onPress={() => setCategory("category1")}
          style={
            category === "category1"
              ? styles.selectCategory
              : styles.nonSelectCategory
          }
        >
          <Text style={{ paddingBottom: 4, textAlign: "center" }}>
            category 1
          </Text>
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
            category 2
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
          <Text style={{ paddingBottom: 4, textAlign: "center" }}>
            category 3
          </Text>
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

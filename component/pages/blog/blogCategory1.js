import moment from "moment";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default Category1 = (props) => {
  const { blogs_data } = props;
  return (
    <ScrollView bounces={false}>
      <View style={styles.Category1Container}>
        {blogs_data.map((arg, i) => {
          return (
            <View key={i} style={styles.allBlogView}>
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
                {arg.content.slice(0, 250)}...
              </Text>
              <Text>
                Author:
                <Text style={styles.blogAuthor}>{arg.author}</Text>
              </Text>
              <Text>
                Source:
                <Text style={styles.blogSource}>{arg.source}</Text>
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Category1Container: { paddingTop: 10, paddingBottom: 40, height: "100%" },
  allBlogView: {
    paddingHorizontal: 12,
    paddingVertical: 18,
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
});

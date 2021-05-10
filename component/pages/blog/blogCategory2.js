import moment from "moment";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default Category2 = (props) => {
  const { blogs_data } = props;
  return (
    <ScrollView bounces={false}>
      <View style={{ paddingTop: 10, paddingBottom: 40, height: "100%" }}>
        {blogs_data.map((arg, i) => {
          return (
            <View
              key={i}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 18,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#999966",
                }}
              >
                {moment(arg.posteddate).format("DD MMM YYYY")}
              </Text>
              <Text
                onPress={() =>
                  props.navigation.navigate("SingleBlogView", {
                    id: arg.id,
                  })
                }
                style={{
                  paddingBottom: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#4d4d33",
                  textTransform: "capitalize",
                }}
              >
                {arg.title}
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  textAlign: "justify",
                }}
              >
                {arg.content}
              </Text>
              <Text>
                Author:
                <Text
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {arg.author}
                </Text>
              </Text>
              <Text>
                Source:
                <Text
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {arg.source}
                </Text>
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

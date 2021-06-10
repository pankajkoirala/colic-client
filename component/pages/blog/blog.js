import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { blogSearch } from "../../service/blog";
import Blogs_blogs from "./blogs_blogs";
import Blogs_reaearch from "./blogs_research";
import Blogs_video from "./blogs_video";
import HTML from "react-native-render-html";
import { base_URL } from "../../utils/const";

export default Blog = (props) => {
  const [category, setCategory] = useState("blogs");
  const [searchWord, setSearchWord] = useState(null);
  const [searchedData, setSearchedData] = useState(null);

  const { blogs_data, setLoaderIsOpen } = props;
  const contentWidth = useWindowDimensions().width;
  var { width, height } = Dimensions.get("window");

  useEffect(() => {
    if (!searchWord) {
      setSearchedData(null);
      setSearchWord(null);
    }
  }, [searchWord]);

  return (
    <View style={styles.blogContainer}>
      <View style={{ height: "100%" }}>
        <View style={styles.editBack}>
          <View style={styles.menuNameView}>
            <FontAwesome5Icon
              onPress={() => props.navigation.goBack()}
              name={"arrow-left"}
              size={20}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 4,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: 30,
                width: 200,
                borderWidth: 1,
                borderColor: "balck",
                borderRadius: 20,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome5Icon
                  name={"search"}
                  size={20}
                  color={"grey"}
                  style={{ marginTop: 4, marginRight: 4 }}
                />
              </TouchableOpacity>
              <TextInput
                style={{
                  height: 30,
                  width: 100,
                }}
                onChangeText={(value) => setSearchWord(value)}
                placeholder="Search"
              />
              <TouchableOpacity
                disabled={!searchWord}
                onPress={() => {
                  setLoaderIsOpen(true);
                  blogSearch(searchWord, setSearchedData, setLoaderIsOpen);
                }}
                style={{
                  height: 30,
                  width: 100,
                  borderRadius: 20,
                  backgroundColor: "black",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Search
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {!searchedData && (
          <View>
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
            <View style={{ height: "100%" }}>
              {category === "blogs" ? (
                <Blogs_blogs
                  blogs_blogs={blogs_data?.blogs?.filter(
                    (arg) => arg.category === "blog"
                  )}
                  {...props}
                />
              ) : null}
              {category === "research" ? (
                <Blogs_reaearch
                  blogs_research={blogs_data?.research?.filter(
                    (arg) => arg.category === "research"
                  )}
                  {...props}
                />
              ) : null}
              {category === "video" ? (
                <Blogs_video
                  blogs_video={blogs_data?.video?.filter(
                    (arg) => arg.category === "video"
                  )}
                  {...props}
                />
              ) : null}
            </View>
          </View>
        )}
        <ScrollView>
          {searchedData?.length ? (
            <View>
              {searchedData &&
                searchedData.map((arg, i) => {
                  console.log(arg);
                  return (
                    <View key={i}>
                      {arg.category === "video" ? (
                        <View>
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
                                <Text style={styles.blogTitle}>
                                  {" "}
                                  {arg.title}
                                </Text>
                              </TouchableOpacity>
                              <HTML
                                source={{ html: arg.content.slice(0, 150) }}
                                contentWidth={contentWidth}
                              />
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
                      ) : (
                        <View key={i}>
                          {i === 0 ? (
                            <View>
                              <Image
                                style={styles.blogImg}
                                source={{
                                  uri: `${base_URL}/${arg.photos[0]}`,
                                }}
                              />
                              <View style={styles.firstBlogBox}>
                                <TouchableOpacity
                                  onPress={() =>
                                    props.navigation.navigate(
                                      "SingleBlogView",
                                      {
                                        id: arg.id,
                                      }
                                    )
                                  }
                                >
                                  <Text style={styles.blogTitle}>
                                    {" "}
                                    {arg.title}
                                  </Text>
                                </TouchableOpacity>

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
                                  source={{ html: arg.content.slice(0, 150) }}
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
                                  uri: `${base_URL}/${arg.photos[0]}`,
                                }}
                              />
                              <View style={styles.otherBlogText}>
                                <Text style={styles.blogPostedDate}>
                                  {moment(arg.posteddate).format("DD MMM YYYY")}
                                </Text>
                                <Text
                                  onPress={() =>
                                    props.navigation.navigate(
                                      "SingleBlogView",
                                      {
                                        id: arg.id,
                                      }
                                    )
                                  }
                                  style={styles.blogTitle}
                                >
                                  {arg.title}
                                </Text>
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
                                  source={{ html: arg.content.slice(0, 150) }}
                                />
                              </View>
                            </View>
                          )}
                        </View>
                      )}
                    </View>
                  );
                })}
            </View>
          ) : (
            <View
              style={{
                width: width,
                height: height - 100,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                No Blogs Found
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blogContainer: { paddingTop: 20, height: "100%" },
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
  nextPre: {
    height: 32,
    width: 32,
    backgroundColor: "#ffe0b3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  //---------------------------------------
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

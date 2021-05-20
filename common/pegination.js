import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ExampleDotPaginate = (props) => {
  const { currentPage, maxPage, setCurrentPage } = props;
  //const [currentPage, setCurrentPage] = useState(0);
  //  const [maxPage, setMaxPage] = useState(19);

  const color = "black";

  return (
    <View style={styles.peginationView}>
      <TouchableOpacity
        disabled={currentPage === 1 && true}
        style={styles.nextPre}
        onPress={() => {
          if (currentPage === 0) {
            setCurrentPage(currentPage);
          } else {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        <FontAwesome5 name="chevron-left" size={25} />
      </TouchableOpacity>
      <PaginationDot
        activeDotColor={color}
        curPage={currentPage - 1}
        maxPage={maxPage}
        sizeRatio={1.0}
      />
      <TouchableOpacity
        disabled={currentPage === maxPage && true}
        style={styles.nextPre}
        onPress={() => {
          if (currentPage === maxPage) {
            setCurrentPage(currentPage);
          } else {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <FontAwesome5 name="chevron-right" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default ExampleDotPaginate;
const styles = StyleSheet.create({
  peginationView: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 2,
  },
  nextPre: {
    height: 30,
    width: 50,
    //    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 15,
  },
});

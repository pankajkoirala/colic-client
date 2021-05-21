import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Pegination = (props) => {
  const { currentPage, maxPage, setCurrentPage } = props;

  const MaxThanFivePage = (arg) => {
    switch (arg) {
      case 1:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 3)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 4)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 4}</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 3)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 3}</Text>
            </TouchableOpacity>
          </View>
        );
      case maxPage - 1:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 3)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 3}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
          </View>
        );
      case maxPage:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 4)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 4}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 3)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 2}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  //-----------------------------------------------------------
  const MaxOnePegination = (arg) => {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => setCurrentPage(arg)}
          style={styles.paginationNumViewSelected}
        >
          <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const MaxTwoPegination = (arg) => {
    switch (arg) {
      case 1:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };
  const MaxThreePegination = (arg) => {
    switch (arg) {
      case 1:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 2}</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
          </View>
        );
      case 3:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };
  const MaxFourPegination = (arg) => {
    switch (arg) {
      case 1:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 3)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 3}</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 2}</Text>
            </TouchableOpacity>
          </View>
        );
      case 3:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg + 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg + 1}</Text>
            </TouchableOpacity>
          </View>
        );
      case 4:
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 3)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 2)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg - 1)}
              style={styles.paginationNumView}
            >
              <Text style={styles.peginationNumberText}>{arg - 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentPage(arg)}
              style={styles.paginationNumViewSelected}
            >
              <Text style={styles.peginationNumberTextSelected}>{arg}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  const peginationFunction = (max, arg) => {
    switch (max) {
      case 1:
        return MaxOnePegination(arg);
      case 2:
        return MaxTwoPegination(arg);
      case 3:
        return MaxThreePegination(arg);
      case 4:
        return MaxFourPegination(arg);
      default:
        return MaxThanFivePage(arg);
    }
  };

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
      <View>{peginationFunction(maxPage, currentPage)}</View>
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

export default Pegination;
const styles = StyleSheet.create({
  peginationView: {
    //width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 2,
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
  //----------------------------------------
  paginationNumView: {
    display: "flex",
    height: 32,
    width: 32,
    backgroundColor: "#ffe0b3",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
    borderRadius: 4,
  },
  paginationNumViewSelected: {
    display: "flex",
    height: 32,
    width: 32,
    backgroundColor: "#ffb84d",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
    borderRadius: 4,
  },
  peginationNumberText: {
    marginHorizontal: 6,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  peginationNumberTextSelected: {
    marginHorizontal: 6,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

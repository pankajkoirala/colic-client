import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
  Platform,
} from "react-native";
import { Icon } from "react-native-elements";

export default function PickerInput(props) {
  const [focused, setFocused] = useState(false);

  function onPressIos() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: props.picks.map((i) => i),
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else {
          props.onChange(props.picks[buttonIndex], props.pickerlabel);
        }
      }
    );
  }

  return (
    <View style={{ marginVertical: 5 }}>
      <Text>{props.pickerlabel}</Text>
      <View
        style={{
          overflow: "hidden",
          flexDirection: "row",
        }}
      >
        {Platform.OS !== "ios" ? (
          <View style={focused ? styles.focusedBox : styles.searchSection}>
            <Icon
              style={styles.searchIcon}
              name="filter-outline"
              type="ionicon"
              size={20}
              color="#024A8E"
            />
            <Picker
              selectedValue={props.selected}
              style={styles.input}
              mode="dropdown"
              // itemStyle={{paddingHorizontal: 20}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onValueChange={(itemValue) =>
                props.onChange(itemValue, props.pickerlabel)
              }
            >
              {props.picks.map((i, ind) => {
                return (
                  <Picker.Item label={i} value={i} key={ind} />
                );
              })}
            </Picker>
          </View>
        ) : (
          <TouchableOpacity
            style={focused ? styles.focusedBox : styles.searchSection}
            onPress={() => onPressIos()}
          >
            <Icon
              style={styles.searchIcon}
              name="filter-outline"
              type="ionicon"
              size={20}
              color="#024A8E"
            />
            <View style={styles.inputios}>
              <Text>
                {props.picks.find((i) => i === props.selected)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 5,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "transparent",
    color: "#424242",
  },
  inputios: {
    flex: 1,
    flexBasis: 1,
    flexGrow: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#424242",
  },
  userimage: {
    marginLeft: "auto",
    height: 40,
    width: 40,
    borderRadius: 100,
    borderColor: "blue",
    borderWidth: 1,
  },
  focusedBox: {
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 5,
  },
});

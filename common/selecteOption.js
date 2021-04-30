import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
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

  const { picks, label, selected, value, onChange, oldValue, editable } = props;

  const android = picks.slice(1);

  function onPressIos(onChange) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: picks.map((i) => i),
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else {
          onChange(picks[buttonIndex], label);
        }
      }
    );
  }

  return (
    <View
      style={{
        marginVertical: 5,
        width: "100%",
      }}
    >
      <Text>{label}</Text>

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
              selectedValue={selected}
              style={styles.input}
              mode="dropdown"
              enabled={editable}
              itemStyle={{ paddingHorizontal: 20 }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onValueChange={(itemValue) => onChange(itemValue)}
            >
              {android.map((i, ind) => {
                return (
                  <Picker.Item
                    label={i || oldValue || "Select One"}
                    value={i}
                    key={ind}
                  />
                );
              })}
            </Picker>
          </View>
        ) : (
          <TouchableOpacity
            style={focused ? styles.focusedBox : styles.searchSection}
            onPress={() => (editable === true ? onPressIos(onChange) : null)}
          >
            <Icon
              style={styles.searchIcon}
              name="filter-outline"
              type="ionicon"
              size={10}
              color="#024A8E"
            />
            <View style={styles.inputios}>
              <Text>
                {picks.find((i) => i === value) || oldValue || "Select One"}
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
    // flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: "#fff",
    // borderRadius: 15,
    marginVertical: 5,
    // backgroundColor: "red",
    borderColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    height: 40,
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
    // backgroundColor: "transparent",
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

  focusedBox: {
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // borderRadius: 15,
    marginVertical: 5,
  },
});

import { Alert } from "react-native";
import { getDefaultUser, saveFingerPrint } from "./fingerPrintStorage";

export const fingerPrintSaveAlert = async (token, data) => {
  let hasUser = await getDefaultUser();
  if (!hasUser) {
    Alert.alert(
      "Authentication",
      "Do you want to use your fingerprint for your next login?",
      [
        {
          text: "Cancel",
        },
        {
          text: "OK",
          onPress: () => saveFingerPrint(data),
        },
      ],
      {
        cancelable: true,
      }
    );
  } else {
    if (token && hasUser.email !== data.email) {
      Alert.alert(
        "Authentication",
        "Do you want to use your fingerprint for your next login?",
        [
          {
            text: "Cancel",
          },
          {
            text: "OK",
            onPress: () => saveFingerPrint(data),
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  }
};

export const errorAlert = (msg) => {
  Alert.alert("Error", msg, [{ text: "OK" }], {
    cancelable: true,
  });
};
export const successAlert = (msg) => {
  Alert.alert("Success", msg, [{ text: "OK" }], {
    cancelable: true,
  });
};

export const AlertWithNavigator = async (message, props, screen) => {
  await Alert.alert(
    "Success",
    message,
    [
      {
        text: "Cancel",
      },
      {
        text: "OK",
        onPress: () => {
          props.navigation.navigate(screen);
        },
      },
    ],
    {
      cancelable: true,
    }
  );
};

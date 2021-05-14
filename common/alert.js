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

export const errorAlert = async (message, loaderOff) => {
  await Alert.alert(
    "Failed",
    message,
    [
      {
        text: "ok",
        onPress: () => loaderOff(),
      },
    ],
    {
      cancelable: true,
    }
  );
};
export const successAlert = async (message) => {
  await Alert.alert("Success", message, {
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
        onPress: () => props.navigation.navigate(screen),
      },
    ],
    {
      cancelable: true,
    }
  );
};

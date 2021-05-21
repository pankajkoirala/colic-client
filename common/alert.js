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
        onPress: () => {
          props.navigation.navigate(screen);
        },
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

export const AlertWithNavigatorForgetPW = async (
  message,
  props,
  screen,
  data
) => {
  await Alert.alert(
    "Success",
    message,
    [
      {
        text: "Cancel",
        onPress: () => {
          props.navigation.navigate(screen, { data: data });
        },
      },
      {
        text: "OK",
        onPress: () => {
          props.navigation.navigate(screen, { data: data });
        },
      },
    ],
    {
      cancelable: true,
    }
  );
};

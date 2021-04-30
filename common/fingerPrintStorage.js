import * as SecureStore from "expo-secure-store";
import * as LocalAuthentication from "expo-local-authentication";

export async function getDefaultUser() {
  const userToken = await SecureStore.getItemAsync("user");
  if (userToken) {
    return JSON.parse(userToken);
  } else {
    return null;
  }
}

export async function saveDefaultUser(userData) {
  try {
    await SecureStore.setItemAsync("user", JSON.stringify(userData));
    return true;
  } catch (e) {
    return false;
  }
}

export async function clearFingerPrint() {
  try {
    await SecureStore.deleteItemAsync("user");
  } catch (e) {
    console.log("Error clearing data");
  }
}

export async function saveFingerPrint(data) {
  let result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Touch the fingerprint sensor",
    fallbackLabel: "",
  });
  // let saved = await
  saveDefaultUser(data);
}

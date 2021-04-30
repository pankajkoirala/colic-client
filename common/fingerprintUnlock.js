import * as LocalAuthentication from "expo-local-authentication";
import { fingerPrintLogin } from "../component/service/authService";
import { getDefaultUser } from "./fingerPrintStorage";

async function checkCompatible(dispatch) {
  let hasBiometric = await LocalAuthentication.hasHardwareAsync();
  console.log(
    "🚀 ~ file: fingerprintUnlock.js ~ line 9 ~ checkCompatible ~ hasBiometric",
    hasBiometric
  );
  let hasSetup = await LocalAuthentication.isEnrolledAsync();
  let hasUser = await getDefaultUser();

  if (hasBiometric && hasSetup && hasUser && hasUser.email) {
    fingerPrintLogin(hasUser, dispatch);
  }
}

export async function scanFingerprint(dispatchData) {
  let result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Touch the fingerprint sensor",
    fallbackLabel: "",
  });
  if (result.success) {
    checkCompatible(dispatchData);
  } else {
    console.log("err");
  }
}

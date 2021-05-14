import * as LocalAuthentication from "expo-local-authentication";
import { fingerPrintLogin } from "../component/service/authService";
import { getDefaultUser } from "./fingerPrintStorage";

async function checkCompatible(dispatch, setLoaderOff) {
  let hasBiometric = await LocalAuthentication.hasHardwareAsync();
  console.log(
    "🚀 ~ file: fingerprintUnlock.js ~ line 9 ~ checkCompatible ~ hasBiometric",
    hasBiometric
  );
  let hasSetup = await LocalAuthentication.isEnrolledAsync();
  let hasUser = await getDefaultUser();

  if (hasBiometric && hasSetup && hasUser && hasUser.email) {
    fingerPrintLogin(hasUser, dispatch, setLoaderOff);
  }
}

export async function scanFingerprint(dispatchData, setLoaderOff) {
  let result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Touch the fingerprint sensor",
    fallbackLabel: "",
  });
  if (result.success) {
    checkCompatible(dispatchData, setLoaderOff);
  } else {
    console.log("err");
  }
}

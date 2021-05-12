import "react-native-gesture-handler";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./component/redux/root-reducer/root-reducer";
import RootNavigator from "./component/navigationBar/rootNavigation";
//import { useFonts } from "expo-font";
import { persistStore, persistReducer } from "redux-persist";

import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

//redux
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);
const store = createStore(persistedReducer, middleware);
const Persistor = persistStore(store);

export default function AppStack(props) {
  /* const [loaded] = useFonts({
    Montserrat: require("./assets/font/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }*/

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

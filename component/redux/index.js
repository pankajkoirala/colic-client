import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./root-reducer/root-reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = createStore(persistedReducer, middleware);
const Persistor = persistStore(Store);

export { Store, Persistor };

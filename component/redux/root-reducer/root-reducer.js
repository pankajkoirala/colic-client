import { combineReducers } from "redux";
import { tokenRequestReducer } from "../reducer/tokenStore";
import { profileDetailReducer } from "../reducer/profileDetail";
import { reloadReducer } from "../reducer/reloadReducer";


export const rootReducer = combineReducers({
  token:tokenRequestReducer,
  profileDetail:profileDetailReducer,
  reload:reloadReducer
});

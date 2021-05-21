import { combineReducers } from "redux";
import { tokenRequestReducer } from "../reducer/tokenStore";
import { profileDetailReducer } from "../reducer/profileDetail";
import { reloadReducer } from "../reducer/reloadReducer";
import { baby_cryingReducer } from "../reducer/crying_dataReducer";
import { blogsReducer } from "../reducer/blogsDataReducer";

const rootReducer = combineReducers({
  token: tokenRequestReducer,
  profileDetail: profileDetailReducer,
  reload: reloadReducer,
  crying_data: baby_cryingReducer,
  blogs_data: blogsReducer,
});
export const allReducer = (state, action) => {
  return rootReducer(state, action);
};

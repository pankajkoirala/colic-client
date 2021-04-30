import { PROFILE_DETAIL } from "../action/action";

const initialState = { profileDetail: {} };
export const profileDetailReducer = (state = initialState, action) => {
  switch (action.type) {
  case PROFILE_DETAIL:
    return { ...state, profileDetail: action.payload };

  default:
    return { ...state };
  }
};

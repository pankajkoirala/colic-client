import { AUTH_TOKEN } from "../action/action";

const initialState = { token: '' };
export const tokenRequestReducer = (state = initialState, action) => {
  switch (action.type) {
  case AUTH_TOKEN:
    return { ...state, token: action.payload };

  default:
    return { ...state };
  }
};

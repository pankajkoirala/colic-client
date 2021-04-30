import { RELOAD } from "../action/action";

const initialState = { reload: {} };
export const reloadReducer = (state = initialState, action) => {
  switch (action.type) {
  case RELOAD:
    return { ...state, reload: action.payload, setReload:action.payload };

  default:
    return { ...state };
  }
};
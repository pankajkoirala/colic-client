import { CRYING_DATA } from "../action/action";

const initialState = { crying_data: [] };
export const baby_cryingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CRYING_DATA:
      return { ...state, crying_data: action.payload };
    default:
      return { ...state };
  }
};

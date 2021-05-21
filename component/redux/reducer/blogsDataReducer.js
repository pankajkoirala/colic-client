import { BLOGS_DATA } from "../action/action";

const initialState = { blogs_data: [] };
export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOGS_DATA:
      return { ...state, blogs_data: action.payload };
    default:
      return state;
  }
};

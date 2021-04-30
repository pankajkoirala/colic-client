import axios from "axios";
import { token_key, base_URL } from "../utils/const";
import {  useDispatch,useSelector } from "react-redux";



const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};
//if (localStorage.getItem(token_key)) {
  //headers[token_key] = getLocalStorage(token_key);
//}
const axiosInstance = axios.create({ baseURL:base_URL, headers,
});

export default axiosInstance;

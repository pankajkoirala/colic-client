import axios from "axios";
import { base_URL } from "../utils/const";

export const blogViewAPI = (id) => {
  axios
    .post(`${base_URL}/api/update_blog_View/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {})
    .catch((err) => {});
};

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

export const blogSearch = (searchWord, setSearchWord, setLoaderIsOpen) => {
  axios
    .post(
      `${base_URL}/api/blog_search`,
      { searchingWord: searchWord },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      setSearchWord(res.data.message);
      setLoaderIsOpen(false);
    })
    .catch((err) => {
      console.log(err);
      setLoaderIsOpen(false);
    });
};

//blogs data---------------------------------------------------------------------------------------------------------
export const blogPegination = (url, dispatch, setReload) => {
  axios
    .post(`${base_URL + url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      var executed = false;
      if (!executed) {
        dispatch(res.data.message);
        executed = true;
        setReload(false);
      }
    })
    .catch((err) => {
      console.log("get profile pic", err.response);
      setReload(false);
    });
};

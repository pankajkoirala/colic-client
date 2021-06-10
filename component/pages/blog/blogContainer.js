import React, { useState } from "react";
import Blog from "./blog";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../common/loader";
import { BLOGS_DATA } from "../../redux/action/action";
import { blogPegination } from "../../service/blog";

export default BlogContainer = (props) => {
  const dispatch = useDispatch();

  const { blogs_data, profileDetail } = useSelector((state) => ({
    blogs_data: state.blogs_data.blogs_data,
    profileDetail: state.profileDetail.profileDetail,
  }));
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);

  const pageNumber = parseInt(blogs_data?.nextPage?.split("=")[1]) - 1;
  const blogDataDespatch = (data) => {
    dispatch({ type: BLOGS_DATA, payload: data });
  };
  const callNextPage = (id) => {
    setLoaderIsOpen(true);
    blogPegination(blogs_data?.nextPage, blogDataDespatch, setLoaderIsOpen);
  };
  const callPrePage = (id) => {
    if (blogs_data?.currentPage !== "1") {
      setLoaderIsOpen(true);
      blogPegination(blogs_data?.prePage, blogDataDespatch, setLoaderIsOpen);
    }
  };
  return (
    <>
      <Loader loaderIsOpen={loaderIsOpen} />
      <Blog
        pageNumber={pageNumber}
        {...props}
        profileDetail={profileDetail}
        blogs_data={blogs_data}
        setLoaderIsOpen={setLoaderIsOpen}
        callNextPage={callNextPage}
        callPrePage={callPrePage}
      />
    </>
  );
};

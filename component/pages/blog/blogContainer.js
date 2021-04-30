import React from "react";
import Blog from "./blog";

export default BlogContainer = (props) => {
  console.log("hjasdhjaddhj");
  const starttime = "14:00";
  const endtime = "20:00";

  let i = 5;
  let s = parseInt(starttime.split(":")[0]);
  let e = parseInt(endtime.split(":")[0]);
  let send = {};
  for (let index = 0; index < e - s; index++) {
    send = { ...send, start: s + index, int: i };
  }

  let old = [
    {
      intensity: 5,
      startTime: 14,
    },
    {
      intensity: 5,
      startTime: 15,
    },
    {
      intensity: 5,
      startTime: 16,
    },
    {
      intensity: 5,
      startTime: 17,
    },
    {
      intensity: 5,
      startTime: 18,
    },
    {
      intensity: 5,
      startTime: 19,
    },
  ];
  let newd = [
    {
      intensity: 5,
      startTime: 17,
    },
    {
      intensity: 5,
      startTime: 18,
    },
    {
      intensity: 5,
      startTime: 13,
    },
    {
      intensity: 5,
      startTime: 12,
    },
    {
      intensity: 5,
      startTime: 21,
    },
    {
      intensity: 5,
      startTime: 19,
    },
  ];

  const newID = newd.map((arg) => arg.startTime);

  let notmatchdata = old.filter((arg) => !newID.includes(arg.startTime));

  let allarray = notmatchdata.concat(newd);
  console.log(
    "🚀 ~ file: blogContainer.js ~ line 79 ~ allarray",
    allarray.sort((a, b) => a.startTime - b.startTime)
  );
  console.log(new Date());
  return <Blog {...props} />;
};

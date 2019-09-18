import React from "react";
// import SectionTopicsToRecap from "./SectionTopicsToRecap";
import "./App.css";

function PostIt(props) {
  let s = {
    height: 200,
    width: 200,
    backgroundColor: props.color,
    margin: 5,
    display: "flex"
  };

  return (
    <div style={s} className="post-It">
      {" "}
      {props.children}
      <div className="PostIt__corner"></div>
    </div>
  );
}

export default PostIt;

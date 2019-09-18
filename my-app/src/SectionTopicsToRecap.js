import React from "react";
import PostIt from "./PostIt";
import "./App.css";

function SectionTopicsToRecap() {
  return (
    <div className="section-postIt-container">
      <h1>Topics to Recap</h1>
      <div className="postIt-container">
        <PostIt color="pink">Debugging Tools</PostIt>
        <PostIt color="tomato">APIs</PostIt>
        <PostIt color="skyblue">Mapbox</PostIt>
      </div>
    </div>
  );
}

export default SectionTopicsToRecap;

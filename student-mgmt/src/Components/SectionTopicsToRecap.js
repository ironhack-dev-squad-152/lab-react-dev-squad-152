import React from "react";
import "../css/SectionTopicsToRecap.css";
import PostIt from "../Components/PostIt"

function SectionTopicsToRecap(){
  return(
    <div className="topics-to-recap">
      <h1 className="topics-to-recap-title">Topics to Recap</h1>
      <div className="PostIt-container">
        <PostIt name="Debugging Tool" color="pink"/>
        <PostIt name="APIs" color ="tomato"/>
        <PostIt name="Mapbox" color="skyblue"/>
      </div>
    </div>
  );
}

export default SectionTopicsToRecap;
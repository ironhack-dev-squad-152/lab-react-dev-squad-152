import React from "react";
import "../css/SectionTopicsToRecap.css";


function PostIt(props){
  let s = {
    height: 100,
    width: 100,
    backgroundColor: props.color,
    margin: 10,
    textAlign: "center",  
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
  }
  return(    
  <div className="post-it" style={s}>
    {props.name}
  </div>
)}

export default PostIt;
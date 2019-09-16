import React from 'react';

function PostIt(props){
  let colored = "";
  let title = "";
  if (props.color === "pink"){
    colored = "pink";
    title = "Debugging Tool"
  }
  if (props.color === "red"){
    colored = "red";
    title = "APIs"
  }
  if (props.color === "blue"){
    colored = "blue";
    title = "Mapbox"
  }
  return <div className={colored}>
    <p>{title}</p>
  </div>
}

export default PostIt;
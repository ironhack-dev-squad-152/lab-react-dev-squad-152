import React from "react";

function PostIt(props) {
  let title = "";
  let colored = "";
  if (props.color === "pink") {
    title = "Debugging Tool";
    colored = "pink";
  } else if (props.color === "red") {
    title = "APIs";
    colored = "red";
  } else {
    title = "Mapbox";
    colored = "blue";
  }
  return (
    <div className={colored}>
      {title}
      <div className="whiteSquare"></div>
    </div>
  );
}

export default PostIt;

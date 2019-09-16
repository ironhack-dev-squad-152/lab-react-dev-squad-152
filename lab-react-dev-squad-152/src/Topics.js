import React from "react";
import PostIt from "./Postit";

function Topics(props) {
  return (
    <section className="topics">
      <h1>Topics to Recap</h1>
      <PostIt color="pink" />
      <PostIt color="red" />
      <PostIt color="blue" />
    </section>
  );
}

export default Topics;

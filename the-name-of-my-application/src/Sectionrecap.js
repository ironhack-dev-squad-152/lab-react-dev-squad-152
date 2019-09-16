import PostIt from "./PostIt";
import React from 'react';

function SectionRecap (props){
  return <div className="topic">
    <h1>Topics to recap</h1>
    <PostIt color="pink"></PostIt>
    <PostIt color="red"></PostIt>
    <PostIt color="blue"></PostIt>
  </div>
}

export default SectionRecap
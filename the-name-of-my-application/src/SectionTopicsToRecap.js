import React from "react";
import "./App.css";

function SectionTopicsToRecap() {
  let s = {
    height: 100,
    width: 100,
    background: "pink"
  };

  let t = {
    height: 100,
    width: 100,
    background: "red"
  };

  let u = {
    height: 100,
    width: 100,
    background: "blue"
  };
  return (
    <div className="SectionTopicsToRecap">
      <h2>Topics to Recap</h2>
      <div class="debug">
        <div class="deb" style={s}>
          Debugging tool
        </div>

        <div class="deb" style={t}>
          APIs{" "}
        </div>

        <div class="deb" style={u}>
          Map box{" "}
        </div>
      </div>
    </div>
  );
}

export default SectionTopicsToRecap;

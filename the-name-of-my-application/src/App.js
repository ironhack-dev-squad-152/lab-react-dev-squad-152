import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import SectionStudents from "./SectionStudents";
import SectionTopicToRecap from "./SectionTopicsToRecap";
import Flag from "./Flag";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SectionStudents />
        <SectionTopicToRecap />
      </div>
    </div>
  );
}

export default App;

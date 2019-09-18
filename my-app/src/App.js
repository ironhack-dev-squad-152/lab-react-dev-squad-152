import React from "react";
import Navbar from "./Navbar";
import SectionStudents from "./SectionStudent";
import SectionTopicsToRecap from "./SectionTopicsToRecap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <SectionStudents />
        <SectionTopicsToRecap />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import StudentsSection from "./Studentsection";
import Topics from "./Topics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StudentsSection />
      <Topics />
    </div>
  );
}

export default App;

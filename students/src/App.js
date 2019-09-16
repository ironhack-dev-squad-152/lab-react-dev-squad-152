import React from 'react';
import './App.css';
import Nav from "./components/navbar"
import Topics from "./components/topics"
import Postit from "./components/PostIt"
import students from "./students" 
import SectionStudents from "./components/SectionStudents"



function App() {
  return (
    <div className="App">
      <Nav />
      <main>
      <div className="container">
        <SectionStudents students={students}/>
        <Topics>
            <Postit color="#F6C3CB">Debugging Tool</Postit>
            <Postit color="#EE6C52">APIs</Postit>
            <Postit color="#B5D7E4">Mapbox</Postit>
        </Topics>
        </div>
      </main>
    </div>
  );
}

export default App;

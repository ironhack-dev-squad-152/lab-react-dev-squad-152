import React from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import NavBar from "./NavBar"; 
import StudentsTable from "../Components/SectionStudents"
import SectionTopicsToRecap from "../Components/SectionTopicsToRecap"
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar />
      </header>
      <main>
        <StudentsTable/>
        <SectionTopicsToRecap/>
      </main>
      
    </div>
  );
}

export default App;

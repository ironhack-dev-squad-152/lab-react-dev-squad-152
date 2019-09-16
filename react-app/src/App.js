import React from 'react';
import Nav from './Nav';
import SectionStudents from './SectionStudents';
import SectionTopicsToRecap from './SectionTopicsToRecap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <SectionStudents />
      <SectionTopicsToRecap />
    
    </div>
  );
}

export default App;

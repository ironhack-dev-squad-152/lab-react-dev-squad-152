import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
// import Sectionrecap from "./Sectionrecap";
import SectionStudent from "./SectionStudent";
import SectionRecap from './Sectionrecap';

function App(props) {
  return (
    <div>
      <NavBar>Dev Squad #152</NavBar>
      <SectionStudent></SectionStudent>
      <SectionRecap></SectionRecap>
    </div>
  );
}

export default App;

import React from "react";
import BurgerIcon from "./BurgerIcon.js";
import "../css/NavBar.css"

function NavBar(props){
  return (
    <div className = "navBar">
      {/* <a className ="squad-name" href="#">{props.squadName}</a> */}
      <a className ="squad-name" href="/home">DEV Squad #144</a>
      <BurgerIcon />
    </div>
  );
}

export default NavBar;
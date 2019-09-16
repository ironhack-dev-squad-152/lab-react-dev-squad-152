import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/NavBar.css"


function burgerIcon(props){
  return (
    <FontAwesomeIcon icon={ faBars } />
  )
}

export default burgerIcon;
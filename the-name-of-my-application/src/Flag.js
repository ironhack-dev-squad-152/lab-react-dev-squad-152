import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function Flag(props) {
  if (props.country === "fr")
    return (
      <p>
        {" "}
        <img src="https://www.countryflags.io/fr/flat/64.png" alt="" />{" "}
        {props.country}
      </p>
    );
  else if (props.lang === "de")
    return (
      <p>
        {" "}
        <img src="https://www.countryflags.io/de/flat/64.png" alt="" />{" "}
        {props.country}
      </p>
    );
  else if (props.lang === "be")
    return (
      <p>
        {" "}
        <img src="https://www.countryflags.io/be/flat/64.png" alt="" />{" "}
        {props.country}
      </p>
    );
  else if (props.lang === "np")
    return (
      <p>
        {" "}
        <img src="https://www.countryflags.io/np/flat/64.png" alt="" />{" "}
        {props.country}
      </p>
    );
  else
    return (
      <p>
        <img src="https://www.countryflags.io/fr/flat/64.png" alt="" />{" "}
        {props.country}
      </p>
    );
}

export default Flag;

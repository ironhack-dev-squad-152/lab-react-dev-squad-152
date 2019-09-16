import React from "react";

function Flag(props) {
  if (props.country === "fr")
    return (
      <img
        className="flag"
        src="https://www.countryflags.io/fr/flat/64.png"
        alt="france"
      />
    );
  else if (props.country === "de")
    return (
      <img
        className="flag"
        src="https://www.countryflags.io/de/flat/64.png"
        alt="germany"
      />
    );
  else if (props.country === "np")
    return (
      <img
        className="flag"
        src="https://www.countryflags.io/NP/flat/64.png"
        alt="nepal"
      />
    );
  else
    return (
      <img
        className="flag"
        src="https://www.countryflags.io/be/flat/64.png"
        alt="belgium"
      />
    );
}

export default Flag;

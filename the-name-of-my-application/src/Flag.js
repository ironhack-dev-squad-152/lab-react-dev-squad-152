import React from 'react';

function Flag(props){
  if (props.country === "fr"){
    return <img src="./64.png" alt="fr"/>
  }
  if (props.country === "de"){
    return <img src="./allemand.png" alt="de"/>
  }
  if(props.country === "be"){
    return <img src="./belgique.png" alt="be"/>
  }
  if(props.country === "np"){
    return <img src="./nepal.png" alt="np"/>
  }
}

export default Flag;
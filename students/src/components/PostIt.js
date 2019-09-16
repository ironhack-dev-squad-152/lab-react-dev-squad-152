import React from 'react';

function Postit(props) {
    

    return <div className="postit" style={{ backgroundColor: props.color }}>{props.children}<div className="petitcarre"></div></div>

}

export default Postit
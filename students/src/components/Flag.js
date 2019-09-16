import React from 'react';

function Flag(prop) {
    
    console.log(prop)
    return (
        <div>
            <img alt={prop.country} src={`https://www.countryflags.io/${prop.country}/flat/64.png`} />
        </div>
    )

}

export default Flag
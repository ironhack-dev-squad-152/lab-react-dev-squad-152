import React from 'react';

function Topics(prop) {

    console.log(prop.children)
    return (

        <footer className="topics-recap">
            <h2 class="subtitle">Topics to Recap</h2>
            <div class="topics-list">
            {prop.children.map((element, i) =>
                <div key={i}>{element}</div>
                )}
            </div>
        </footer>
    )
}

export default Topics
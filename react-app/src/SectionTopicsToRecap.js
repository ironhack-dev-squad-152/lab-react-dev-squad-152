import React from 'react';
import './SectionTopicsToRecap.css';


function SectionTopicsToRecap() {
    return (
        <div>
            <h1> Topics to Recap </h1>
            <div id="div_SectionTopicsToRecap">
                <div className="div_SectionTopicsToRecap" style={{ backgroundColor: "pink" }}> Debugging Tool </div>
                <div className="div_SectionTopicsToRecap" style={{ backgroundColor: "red" }}> APIs </div>
                <div className="div_SectionTopicsToRecap" style={{ backgroundColor: "blue" }}> Mapbox </div>
            </div>
        </div>
    )

}


export default SectionTopicsToRecap;


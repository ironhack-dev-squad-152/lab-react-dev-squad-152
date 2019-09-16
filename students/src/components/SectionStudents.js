import React from 'react'
import Flag from "./Flag"


function SectionStudents(prop) {

    return (
       
        
        <div className="allStudents">
            <h2 class="subtitle">Students</h2>
            <div className="uniqueStudent title">
                <div>Name</div>
                <div>Country</div>
                <div>GitHub</div>
            </div>
            {prop.students.map((element, i) =>

                <div className="uniqueStudent">
                    <div style={{ color: element.gender === "male" ? "blue" : "red" }}>{element.firstName}</div><Flag country={element.country} /><a href={element.githubUsername }>{element.githubUsername.replace("https://github.com/","")}</a>
                </div>

            )}
            </div>
    )
}


export default SectionStudents



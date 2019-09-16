import Flag from "./Flag";
import React from 'react';
import student from "./students"

function SectionStudent (props){
  return <section className="section">
    <h1>Students</h1>
    <hr/>
    <table>
    <thead>
        <tr>
            <th><h1>Name</h1></th>
            <th><h1>Country</h1></th>
            <th><h1>GitHub</h1></th>
        </tr>
    </thead>
    <tbody>
            {student.map((element) => <tr> 
            <td style={{color: element.gender === "male" ? "blue" : "red"}}>{element.firstName}</td>
            <td><Flag country={element.country}/></td>
            <td><a href={element.githubUsername}>{element.githubUsername.substr(19)}</a></td></tr>)}
    </tbody>
</table>
  </section>
}

export default SectionStudent;
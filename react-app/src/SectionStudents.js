import React from "react";
import "./students";
import students from "./students";
import './SectionStudents.css';

function SectionStudents(props) {
  return (
    <div id="div_SectionStudents">
      <h1> Students </h1>
      <table>
        <th> Name </th>
        <th> Country </th>
        <th> GitHub </th>

        <tbody>
          {students.map((student, i) => (
            <tr style={{color: student.gender === "male" ? "blue" : "red"}}>
              <td key={i}> {student.firstName} </td>

              <img src={`https://www.countryflags.io/${student.country}/flat/64.png`} alt="country"/>

              <td> {student.githubUsername} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SectionStudents;

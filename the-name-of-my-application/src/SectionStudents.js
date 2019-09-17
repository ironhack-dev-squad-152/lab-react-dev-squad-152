import React from "react";
import "./App.css";
import students from "./students";

function SectionStudents() {
  return (
    <div className="SectionStudents">
      <h2>Students</h2>
      <table class="table">
        <tr key={students.githubUsername}>
          <thead>
            <th>Name</th>
            <th>Country</th>
            <th>Github</th>
          </thead>
          <tbody>
            {students.map(student => (
              <tr>
                {/* <td className={student.gender}>{student.firstName}</td> */}
                <td
                  style={{ color: student.gender === "male" ? "blue" : "red" }}
                >
                  {student.firstName}
                </td>
                <img
                  className="country-img"
                  src={
                    "https://www.countryflags.io/" +
                    student.country +
                    "/flat/64.png"
                  }
                  alt={"Country img" + student.country}
                />
                <td>
                  <a href={student.githubUsername}>
                    {" "}
                    {student.githubUsername.replace("https://github.com/", "")}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </tr>
      </table>
    </div>
  );
}

export default SectionStudents;

// {students.map(student => (
//     <tr>
//       <td>{student.firstName}</td>
//       <td>{student.country}</td>
//       <td>{student.githubUsername}</td>
//     </tr>
//       ))

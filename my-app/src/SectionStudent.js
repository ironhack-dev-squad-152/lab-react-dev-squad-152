import React from "react";
import "./App.css";
import students from "./students";

function SectionStudents(props) {
  return (
    <div className="SectionStudents">
      <h2 className="student-title">Students</h2>
      <table className="table">
        <tr>
          <thead>
            <th>Name</th>
            <th>Country</th>
            <th>Github</th>
          </thead>
          <tbody>
            {students.map(student => (
              <tr>
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

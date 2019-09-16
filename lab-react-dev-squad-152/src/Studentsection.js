import React from "react";
import students from "./students";
import Flags from "./Flag";

function StudentsSection(props) {
  return (
    <section className="studentSection">
      <h1>Students</h1>
      <table className="studentTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td
                style={{
                  color: student.gender === "male" ? "#3d80f6" : "#cd5153"
                }}
              >
                {student.firstName}
              </td>
              <td>
                <Flags country={student.country} />
              </td>
              <td>
                <a className="link" href={student.githubUsername}>
                  {student.githubUsername.substr(19)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StudentsSection;

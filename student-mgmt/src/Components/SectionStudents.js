import React from "react";
import "../css/SectionStudents.css";
import students from "../students"


function StudentsTable(){
  return(
    <div className="section-students">
       <h1 className="table-name">Students</h1>
       <div className="tableStudent-container">
        <div className="section-students-table">
          <table className="student-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Github</th>
                </tr>
            </thead>
                <TableBody/>
          </table>
        </div>
       </div>

     

    </div>
  )
}

function TableBody(props){
  return(
  <tbody>
    {students.map(student => <tr className="student-table">
      <td className={student.gender}>{student.firstName}</td>
      <td>
        <img className ="country-img" src= {"https://www.countryflags.io/"+student.country+"/flat/64.png"} alt={"Country img" + student.country}/>
      </td>
      <td><a href={student.githubUsername}>{student.githubUsername.replace("https://github.com/","")}</a></td>
    </tr>
    )
  }
  </tbody>
  )

}

export default StudentsTable;
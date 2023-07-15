import React from "react";

const Students = ({ students }) => (
    <ul className="list-group">
      {students.map((student) => (
        <li key={student.id} className="list-group-item">
          ID: {student.id} <br></br> Name: {student.name} <br></br> Age: {student.age}
        </li>
      ))}
    </ul>
  );

  export default Students;
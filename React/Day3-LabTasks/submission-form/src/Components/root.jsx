import React, { useState } from "react";
import Students from "./students";
import Form from "./form";
import { v4 as uuidv4 } from 'uuid';

const Root = () => {
const [students, setStudents] = useState([
    { id: uuidv4(), name: "Ahmed", age: 20 },
    { id: uuidv4(), name: "Yara", age: 22 },
    { id: uuidv4(), name: "Shahy", age: 21 }
  ]);

  const handleFormSubmit = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Student List</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Form onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Students students={students} />
        </div>
      </div>
    </div>
  );
};

export default Root;
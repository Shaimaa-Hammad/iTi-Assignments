import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// SubmissionForm component
const Form = ({ onFormSubmit }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    // setName("koky");
    // setAge(18);
    const handleSubmit = (e) => {
      e.preventDefault();
      const student = {
        id: uuidv4(),
        name,
        age
      };
      onFormSubmit(student);
      setName('');
      setAge('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  };
  export default Form;
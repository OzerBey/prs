import React from "react";

export const PatientRegister = () => {
  return (
    <div>
      <h1>Patient Registration System</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter age"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Identity</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter patient's identity"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">What's problem</label>
          <textarea
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter patient's problem"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

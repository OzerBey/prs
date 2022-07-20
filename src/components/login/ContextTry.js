import React, { useContext } from "react";
import { DoctorContext } from "../../contexts/DoctorContext";

function ContextTry() {
  //doctor context from App.js with useContext on DoctorContext.Provider
  const context = useContext(DoctorContext);
  console.log("Doctorlist: ", context);
  return (
    <div>
      <h2>context-try</h2>
      {context.map((doctor) => {
        return (
          <div key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p>{doctor.email}</p>
            <p>{doctor.password}</p>
            <p>{doctor.age}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ContextTry;

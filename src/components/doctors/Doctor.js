import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export const Doctor = () => {
  return (
    <div>
      <h2>Welcome to doctor panel</h2>
      <Button
        className="button1"
        href="/doctor/patient-register"
        color="primary"
      >
        Register a new patient
      </Button>
      <img
        className="image-middle"
        src="https://images.theconversation.com/files/109409/original/image-20160127-26769-10vf6m4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        alt="doctorPic"
      />
      <Outlet />
    </div>
  );
};

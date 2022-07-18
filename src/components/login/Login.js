/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import alertify from "alertifyjs";

const Login = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const submit = () => {
    console.log(formValues); //looged to console
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);

    if (formValues.email === "" || formValues.password === "") {
      console.error("Please enter all fields");
    } else {
      setIsSubmitting(true);
      setIsSignedIn(true);
    }
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Can't be blank :(";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format !!!";
    }

    if (!values.password) {
      errors.password = "Can't be blank :(";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  const goToDoctorPage = () => {
    setIsSignedIn(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors, isSubmitting, submit]);

  return (
    <div className="loginPage">
      <img
        className="loginPic"
        src="https://images.squarespace-cdn.com/content/v1/5d2d63137e6ae200016b6c62/1581858390465-H7ATJAIP6V20XNF63ZZ4/Revenue+Cycle+Services.jpg?format=1500w"
        alt="doctorPic"
      />
      <h1>Sign in to continue</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <div className="success">
          <h3>User {name} successfully signed!!</h3>
          {/* <span>{alertify.success("Form submitted successfully")}</span> */}
          {/* <Doctor /> */}
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate className="form">
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>{isSubmitting && <span>{formErrors.email}</span>}</div>

        <div className="inputText">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div>{isSubmitting && <span>{formErrors.password}</span>}</div>
        <button className="submitButton" type="submit">
          Sign In
        </button>
        <a style={{ color: "white" }} href="signup">
          I've no any account
        </a>
      </form>
      {/* <h1>
        <span>{isSignedIn ? <Doctor /> : "Not allowed"}</span>
      </h1> */}
    </div>
  );
};

export default Login;

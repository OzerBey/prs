/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useContext } from "react";
import alertify from "alertifyjs";
import { DoctorContext } from "../../contexts/DoctorContext";

const Login = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  //doctor context
  const context = useContext(DoctorContext);
  console.log("Doctorlist: ", context);

  //fake user data
  const admin = {
    email: "admin@gmail.com",
    password: "admin",
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const submit = () => {
    // console.log(formValues); //looged to console
    if (isSignedIn) {
      alertify.success("You are already signed in");
    }
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
    checkIt();
  };

  const checkIt = () => {
    if (formValues.email === "" || formValues.password === "") {
      console.error("Please enter all fields");
    } else {
      setIsSubmitting(true);
      //check if user is signed in
      let isSuccessfulLogin = checkUserFromData(formValues);
      if (isSuccessfulLogin) {
        console.log(
          formValues.email,
          formValues.password,
          " from handleSubmit"
        );
        setIsSignedIn(true);
        alertify.success("You are signed in");
      } else {
        setIsSignedIn(false);
        alertify.error("Invalid credentials");
      }
    }
  };

  //user login check
  const checkUserFromData = (formValues) => {
    if (
      context[0].email === formValues.email &&
      context[0].password === formValues.password
    ) {
      console.log("user found");
      sessionStorage.setItem("user", JSON.stringify(context[0]));
      let local = localStorage.setItem("user", JSON.stringify(context[0]));
      console.log(local);
      return true;
    } else {
      console.log("user not found");
      return false;
    }
    // context.forEach((user) => {
    //   if (
    //     user.email === formValues.email &&
    //     user.password === formValues.password
    //   ) {
    //     console.log("user found");
    //     return true;
    //   } else {
    //     console.log("user not found");
    //     return false;
    //   }
    // });
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Can't be blank :(";
      alertify.error("Please enter email");
    } else if (!regex.test(values.email)) {
      alertify.error("Invalid email format !!!");
      errors.email = "Invalid email format !!!";
    }

    if (!values.password) {
      errors.password = "Can't be blank :(";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  // const goToDoctorPage = () => {
  //   setIsSignedIn(true);
  // };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting && !isSignedIn) {
      submit();
    }
  }, [formErrors, isSubmitting, submit, isSignedIn]);

  return (
    <div className="loginPage">
      <img
        className="loginPic"
        src="https://images.squarespace-cdn.com/content/v1/5d2d63137e6ae200016b6c62/1581858390465-H7ATJAIP6V20XNF63ZZ4/Revenue+Cycle+Services.jpg?format=1500w"
        alt="doctorPic"
      />
      <h1>Sign in to continue</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && isSignedIn && (
        <div className="success">
          <h3>User {name} successfully signed!!</h3>
          {isSignedIn ? window.location.replace("/doctor") : ""}
          {/* {isSignedIn && alertify.success("User successfully signed in")} */}
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

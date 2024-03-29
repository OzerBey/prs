import { useState, useEffect } from "react";
import "./signup.css";

export default function SignUp() {
  const intialValues = { name: "", email: "", password: "" };

  // States for registration
  const [formValues, setFormValues] = useState(intialValues);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //!? // Handling the name change
  // const handleName = (e) => {
  //   setName(e.target.value);
  //   setSubmitted(false);
  // };

  // // Handling the email change
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   setSubmitted(false);
  // };

  // // Handling the password change
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  //   setSubmitted(false);
  // };

  // Handling the form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formValues));
    setSubmitted(true);

    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.password === ""
    ) {
      setError(true);
      setSubmitted(false);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message on top of the page
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {formValues.name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
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

  useEffect(() => {
    if (Object.keys(error).length === 0 && submitted) {
      submit();
    }
  }, [error, submitted, submit]);

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {successMessage()}
      {errorMessage()}
    </div>
  );
}

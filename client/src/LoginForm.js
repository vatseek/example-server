import React from "react";
import { Formik } from "formik";

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values) => {
      console.log("Submitting");
      console.log(values);
    }}
  >
    {props => {
      const { values, handleChange, handleSubmit } = props;
      return (
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />

          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      );
    }}
  </Formik>
);

export default LoginForm;

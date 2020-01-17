import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as EmailValidator from "email-validator";

export default class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!EmailValidator.validate(values.email)) {
            errors.email = "Invalid email address";
          }

          const passwordRegex = /(?=.*[0-9])/;
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be 8 characters long.";
          } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalid password. Must contain one number";
          }

          return errors;
        }}
        onSubmit={values => {
          console.log("Logging in", values);
          history.push("/home");
        }}
        render={({ errors, touched }) => (
          <Form>
            <div>
              <h2>Login Page</h2>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? "error" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="input-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? "error" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="input-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}

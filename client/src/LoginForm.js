import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import { login /*, getProtected*/ } from './api/user'

export default class Login extends React.Component {
  render() {
    const { history } = this.props
    return (
      <Formik
        initialValues={{
          email: 'external',
          password: 'external',
        }}
        validate={(values) => {
          let errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (values.email.length < 3) {
            errors.email = 'Invalid email address'
          }

          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length < 3) {
            errors.password = 'Password must be 8 characters long.'
          }

          return errors
        }}
        onSubmit={({ email, password }) => {
          login({ username: email, password })
            .then(({ user, token }) => {
              localStorage.setItem('token', token)
              localStorage.setItem('user', user)
              history.push('/home')
            })
            .finally((e) => {})
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
                className={'form-control' + (errors.email && touched.email ? 'error' : '')}
              />
              <ErrorMessage name="email" component="div" className="input-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={'form-control' + (errors.password && touched.password ? 'error' : '')}
              />
              <ErrorMessage name="password" component="div" className="input-feedback" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </Form>
        )}
      />
    )
  }
}

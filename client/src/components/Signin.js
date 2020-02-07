import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { required, minLength5 } from '../utils/validators'
import { fetchUser } from '../redux/actions/userActions'
import { login } from '../api/user'

import OwnInput from "./OwnInput";

const SimpleForm = ({ handleSubmit, pristine, submitting, fetchUser, userData, history }) => {
  const sendToServer = ({ username, password }) => {
    login({ username, password })
      .then(({ token, user }) => {
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)

        fetchUser(user)
      })
      .then(() => {
        history.push('/expense')
      })
  }

  return (
    <Form onSubmit={handleSubmit(sendToServer)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Field
          name="username"
          component={OwnInput}
          type="text"
          placeholder="Username"
          validate={[required]}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Field
          name="password"
          component={OwnInput}
          type="password"
          placeholder="Password"
          validate={[required, minLength5]}
        />
      </Form.Group>

      <div>
        <Button
          variant={pristine ? "danger" : "success"}
          type="submit"
          disabled={submitting}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

const LoginForm = reduxForm({
  form: 'simple', // a unique identifier for this form
  initialValues: {
    username: 'vvvvv',
    password: 'vvvvv',
  },
})(SimpleForm)

export default connect(
  ({ user: { data } }) => ({ userData: data }),
  {
    fetchUser,
  }
)(LoginForm)

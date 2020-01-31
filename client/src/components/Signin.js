import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'

import { required, email, minLength5 } from '../utils/validators'

import OwnInput from './OwnInput'

const SimpleForm = (props) => {
  const sendToServer = (v) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 3000)
    })
  }

  const { handleSubmit, pristine, submitting } = props
  return (
    <Form onSubmit={handleSubmit(sendToServer)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Field
          name="email"
          component={OwnInput}
          type="email"
          placeholder="Email"
          validate={[required, email]}
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
        <Button variant={pristine ? 'danger' : 'success'} type="submit" disabled={submitting}>
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  initialValues: {
    email: 'oleg@productcrafters.io',
    password: '123123',
  },
})(SimpleForm)

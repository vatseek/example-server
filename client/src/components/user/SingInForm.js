import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { required, minLength5 } from '../../utils/validators'
import { insertUser } from '../../redux/actions/userActions'
import { register } from '../../api/user'

import OwnInput from '../OwnInput'

const SimpleForm = ({ handleSubmit, pristine, submitting, insertUser, history }) => {
  const sendToServer = ({ username, password }) => {
    register({ username, password })
      .then(({ user, token }) => {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))

        insertUser(user)
      })
      .then(() => {
        history.push('/expenses')
      })
      .catch((err) => console.log(err))
  }

  return (
    <Form onSubmit={handleSubmit(sendToServer)}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Username</Form.Label>
        <Field name='username' component={OwnInput} type='text' placeholder='Username' validate={[required]} />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Field
          name='password'
          component={OwnInput}
          type='password'
          placeholder='Password'
          validate={[required, minLength5]}
        />
      </Form.Group>

      <div>
        <Button variant={pristine ? 'danger' : 'success'} type='submit' disabled={submitting}>
          Submit
        </Button>
      </div>
    </Form>
  )
}

const SingInForm = reduxForm({
  form: 'simple',
})(SimpleForm)

export default connect(null, {
  insertUser,
})(SingInForm)

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { required, minLength5 } from '../../utils/validators'
import { insertUser } from '../../redux/actions/userActions'
import { login } from '../../api/user'

import OwnInput from '../OwnInput'

const SimpleForm = ({ handleSubmit, pristine, submitting, insertUser, userData, history }) => {
	const sendToServer = ({ username, password }) => {
		login({ username, password })
			.then(({ token, user }) => {
				localStorage.setItem('token', token)
				localStorage.setItem('user', JSON.stringify(user))

				insertUser(user)
			})
			.then(() => {
				history.push('/expenses')
			})
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

const LoginForm = reduxForm({
	form: 'simple',
	initialValues: {
		username: 'external',
		password: 'external',
	},
})(SimpleForm)

const mapStateToProps = (store) => {
	return {
		userData: store.user.data,
	}
}

export default connect(mapStateToProps, {
	insertUser,
})(LoginForm)

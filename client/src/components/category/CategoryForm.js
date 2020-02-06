import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'

import { required, minLength2 } from '../../utils/validators'

// import { name } from '../../api/category'

import OwnInput from '../OwnInput'

const CategoryForm = (props) => {
	const sendToServer = (values) => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(true)
			}, 3000)
		})
	}

	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit(sendToServer)}>
			<Form.Group controlId='categoryName'>
				<Form.Label>Сategory name:</Form.Label>
				<Field
					name='name'
					component={OwnInput}
					type='text'
					placeholder='Category name'
					validate={[required, minLength2]}
				></Field>
			</Form.Group>

			<div>
				<Button
					variant={pristine ? 'danger' : 'success'}
					type='submit'
					disabled={submitting}
				>
					Submit
				</Button>
			</div>
		</Form>
	)
}

export default reduxForm({
	form: 'category',
})(CategoryForm)

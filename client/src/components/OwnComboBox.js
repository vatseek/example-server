import { Form } from 'react-bootstrap'
import React from 'react'

const ownInput = (props) => {
	const { input, meta, categories, ...rest } = props
	const { valid, error, touched } = meta

	return (
		<>
			<Form.Control {...input} {...rest} as='select' isInvalid={touched && !valid}>
				<option></option>
				{categories
					? categories.map((category) => (
							<option key={category._id} value={category._id}>
								{category.name}
							</option>
					  ))
					: ''}
			</Form.Control>
			{touched && error && <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>}
		</>
	)
}

export default ownInput

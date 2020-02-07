import { Form } from 'react-bootstrap'
import React from 'react'


const ownInput = (props) => {
	const { input, meta, ...rest } = props
	const { valid, error, touched } = meta
	return (
		<>
			<Form.Control
				{...input}
				{...rest}
				as='select'
				isInvalid={touched && !valid}
			>
				<option></option>
				<option value='food'>Food</option>
				<option value='rest'>Rest</option>
				<option value='clothes'>Clothes</option>
			</Form.Control>
			{touched && error && (
				<Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
			)}
		</>
	)
}

export default ownInput

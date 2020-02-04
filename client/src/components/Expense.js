import React, { useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'
import { required, date } from 'redux-form-validators'

import { getCategory } from '../api/category'
import OwnInput from './OwnInput'
import OwnComboBox from './OwnComboBox'
import DatePicker, { formatDates, normalizeDates } from './OwnDatePicker'

const ExpenseForm = (props) => {
	const sendToServer = (values) => {

	}

	useEffect(() => {
    getCategory().then(res => {
      console.log(res)
    })
	}, [])

	const { handleSubmit, pristine, submitting } = props
	return (
		<Form onSubmit={handleSubmit(sendToServer)}>
			<Form.Group controlId='formBasicAmount'>
				<Form.Label>Amount</Form.Label>
				<Field
					name='amount'
					component={OwnInput}
					type='text'
					placeholder='Amount'
					validate={[required()]}
				/>
			</Form.Group>

			<Form.Group controlId='formBasicCategory'>
				<Form.Label>Category</Form.Label>
				<Field
					name='category'
					component={OwnComboBox}
					validate={[required()]}
				/>
			</Form.Group>

			<Form.Group controlId='formBasicDate'>
				<Form.Label>Date</Form.Label>
				<Field
					name={'date'}
					component={DatePicker}
					placeholder='Date'
					parse={normalizeDates}
					format={formatDates}
					validate={[required(), date()]}
				/>
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


// connect
export default reduxForm({
	form: 'simple',
})(ExpenseForm)

import React, { PureComponent } from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

class DatePicker extends PureComponent {
	state = {
		focused: false,
	}

	onFocusChange = (value) => {
		this.setState({ focused: !this.state.focused })
		const { input } = this.props
		input.onFocus(value)
	}

	render() {
		const {
			input,
			meta: { touched, error },
			placeholder,
			disabled,
		} = this.props
		const { focused } = this.state

		return (
			<React.Fragment>
				<SingleDatePicker
					showClearDate={true}
					showDefaultInputIcon={true}
					displayFormat='YYYY-MM-DD'
					numberOfMonths={1}
					disabled={disabled}
					placeholder={placeholder}
					date={input.value}
					onDateChange={input.onChange}
					focused={focused}
					onFocusChange={this.onFocusChange}
					id={input.name}
					required={true}
				/>
				{touched && error && <div style={{ color: 'red' }}>{error}</div>}
			</React.Fragment>
		)
	}
}

export const formatDates = (value) => (value ? moment(value) : null)

export const normalizeDates = (value) =>
	value ? value.format('YYYY-MM-DD') : null

export default DatePicker

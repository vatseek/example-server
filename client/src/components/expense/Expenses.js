import React from 'react'
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getExpensesStart, getExpenses, removeExpense } from '../../redux/actions/expensesActions'
import { fetchExpenses, deleteExpense } from '../../api/expense'

class Expenses extends React.Component {
	constructor(props) {
		super(props)

		this.handleDelete = this.handleDelete.bind(this)
	}

	componentDidMount() {
		if (this.props.expenses.length <= 0) {
			this.props.getExpensesStart()
			fetchExpenses()
				.then((result) => {
					this.props.getExpenses(result)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	handleDelete(e) {
		const id = e.target.value

		deleteExpense(id).then((result) => {
			this.props.removeExpense(result._id)
		})
	}

	render() {
		return (
			<div className='row' style={{ marginTop: '50px' }}>
				<div className='container'>
					<InputGroup className='mb-3'>
						<FormControl placeholder='Description' aria-label='Description' aria-describedby='basic-addon2' />
						<InputGroup.Append>
							<Button variant='outline-secondary'>Search</Button>
						</InputGroup.Append>
						<Link to='/expenses/create'>
							<Button variant='outline-primary'>Create expense</Button>
						</Link>
					</InputGroup>
					{this.props.expenses
						? this.props.expenses.map((expense) => (
								<Card key={expense._id}>
									<Card.Header>{expense.amount} UAH</Card.Header>
									<Card.Body>
										<Card.Text>{expense.description}</Card.Text>
										<Button variant='danger' value={expense._id} onClick={this.handleDelete}>
											Delete
										</Button>
									</Card.Body>
								</Card>
						  ))
						: ''}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		expenses: store.expenses.data,
	}
}

export default connect(mapStateToProps, {
	getExpensesStart,
	getExpenses,
	removeExpense,
})(Expenses)

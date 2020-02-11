import React from 'react'
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  getExpensesStart,
  getExpensesSuccess,
  getExpensesFailure,
  removeExpense,
} from '../../redux/actions/expensesActions'
import { fetchExpenses, deleteExpense } from '../../api/expense'

class Expenses extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const { expenses, getExpensesStart, getExpensesSuccess, getExpensesFailure } = this.props

    if (expenses.length <= 0) {
      getExpensesStart()
      fetchExpenses()
        .then((result) => {
          getExpensesSuccess(result)
        })
        .catch((err) => {
          getExpensesFailure(err)
          console.log(err)
        })
    } else {
      console.log('before sort ', expenses)
      this.sortExpences(expenses)
      console.log('after sort ', expenses)
    }
  }

  sortExpences(expenses) {
    expenses.sort((prev, curr) => {
      return new Date(prev.created_at).getDate() - new Date(curr.created_at).getDate()
    })
  }

  handleDelete(e) {
    const id = e.target.value

    deleteExpense(id).then((result) => {
      this.props.removeExpense(result._id)
    })
  }

  render() {
    console.log(this.props.expenses)
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
          {this.props.expenses &&
            this.props.expenses.map((expense) => (
              <Card key={expense._id}>
                <Card.Header>{expense.amount} UAH</Card.Header>
                <Card.Body>
                  <Card.Text>{expense.description}</Card.Text>
                  <Button variant='danger' value={expense._id} onClick={this.handleDelete}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
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
  getExpensesSuccess,
  getExpensesFailure,
  removeExpense,
})(Expenses)

import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ExpensesList from './ExpensesList'

import { getExpenses, deleteExpense } from '../../services/expenses'

class Expenses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expenses: [],
      found: false,
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    const { expenses, getExpenses } = this.props

    if (expenses.length <= 0) {
      getExpenses()
    }
  }

  handleSearch(e) {
    const { expenses } = this.props
    const text = e.target.value

    let arr = expenses.filter((expense) => expense.description.includes(text))
    if (arr.length >= 1 && text !== '') {
      this.setState({ expenses: arr, found: true })
    } else {
      this.setState({ found: false })
    }
  }

  render() {
    return (
      <div className='row' style={{ marginTop: '50px' }}>
        <div className='container'>
          <InputGroup className='mb-3'>
            <FormControl
              onKeyUp={this.handleSearch}
              placeholder='Description'
              aria-label='Description'
              aria-describedby='basic-addon2'
            />
            <Link to='/expenses/create'>
              <Button variant='outline-primary'>Create expense</Button>
            </Link>
          </InputGroup>
          {this.state.found && (
            <div>
              <h1 className='text-center'>Search results</h1>
              <ExpensesList expenses={this.state.expenses} />
              <hr className='bg-dark' />
            </div>
          )}
          <ExpensesList expenses={this.props.expenses} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    expenses: store.expenses.data,
    categories: store.categories.data,
  }
}

export default connect(mapStateToProps, {
  getExpenses,
  deleteExpense,
})(Expenses)

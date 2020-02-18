import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

import { deleteExpense } from '../../services/expenses'

const ExpenseList = ({ expenses, categories, deleteExpense }) => {
  const getCategoryNameById = (id) => {
    const category = categories.find((category) => category._id === id)

    if (category !== undefined) {
      return category.name
    } else {
      return 'Unknown'
    }
  }

  const handleDelete = (e) => {
    const id = e.target.value

    deleteExpense(id)
  }

  return (
    <>
      {expenses &&
        expenses.map((expense) => (
          <Card key={expense._id}>
            <Card.Header>
              <b>{expense.amount}</b> UAH
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <b>Description: </b>
                {expense.description}
              </Card.Text>
              <Card.Text>
                <b>Category: </b>
                {getCategoryNameById(expense.category)}
              </Card.Text>
              <Button variant='danger' value={expense._id} onClick={handleDelete}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    categories: store.categories.data,
  }
}

export default connect(mapStateToProps, {
  deleteExpense,
})(ExpenseList)

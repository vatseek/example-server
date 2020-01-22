const _ = require('lodash')
const Expense = require('../models/Expense')

const addNewExpenses = (expenses) => {
  if (_.isEmpty(expenses)) {
    return Promise.resolve(true)
  }

  const query = expenses.reduce((n, v) => {
    return [...n, { amount: parseFloat(v.amount), description: v.description }]
  }, [])

  return Expense.find({ $or: query }).then((res) => {
    // filter existing
    return Expense.insertMany(
      expenses.map((i) => ({
        amount: parseFloat(i.amount),
        description: i.description,
        date: new Date(`${i.trandate} ${i.trantime}`),
      }))
    )
  })
}

module.exports = {
  addNewExpenses,
}

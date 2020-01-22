const mongoose = require('mongoose')
const { Schema } = mongoose

const ExpenseSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model('Expense', ExpenseSchema)

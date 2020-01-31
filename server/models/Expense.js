const mongoose = require('mongoose')
const crypto = require('crypto')

const Category = require('./Category')
const User = require('./User')

const { Schema } = mongoose

const ExpenseSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: Category,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    hash: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
)

module.exports = mongoose.model('Expense', ExpenseSchema)

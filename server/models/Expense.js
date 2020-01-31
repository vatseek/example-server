const mongoose = require('mongoose')
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
		},
		hash: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
		},
	},
)

ExpenseSchema.pre('save', (next) => {
	console.log(this.hash)
	next()
})

module.exports = mongoose.model('Expense', ExpenseSchema)

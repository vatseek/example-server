const _ = require('lodash')
const Expense = require('../models/Expense')

const addNewExpenses = (expenses, user, category = null) => {
	if (_.isEmpty(expenses)) {
		return Promise.resolve(true)
	}

	const query = expenses.reduce((n, v) => {
		return [...n, { amount: parseFloat(v.amount), description: v.description }]
	}, [])

	return Expense.find({ $or: query }).then((res) => {
		let toSave = expenses.filter((v) => {
			return !res.find((i) => {
				return (
					parseFloat(v.amount) == i.amount && v.description == i.description
				)
			})
		})

		toSave = toSave.map((i) => ({
			amount: parseFloat(i.amount),
			description: i.description,
			category: category,
			owner: user,
		}))

		return Expense.insertMany(
			toSave.map((i) => ({
				amount: parseFloat(i.amount),
				description: i.description,
				category: category,
				owner: user,
			})),
		)
	})
}

module.exports = {
	addNewExpenses,
}

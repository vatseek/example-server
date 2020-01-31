const _ = require('lodash')
const Expense = require('../models/Expense')
const crypto = require('crypto')

const addNewExpenses = (expenses, user = null, category = null) => {
	if (_.isEmpty(expenses)) {
		return Promise.resolve(true)
	}

	const query = expenses.reduce((n, v) => {
		return [...n, { amount: parseFloat(v.amount), description: v.description }]
	}, [])

	return Expense.find({ $or: query }).then((res) => {
		let intersection = []

		expenses.forEach((e) => {
			let exists = []
			exists.push(false)

			res.forEach((r) => {
				if (
					crypto
						.createHash('md5')
						.update(e.amount + e.description)
						.digest('hex') === r.hash
				) {
					exists.push(true)
				}
			})

			if (!exists.includes(true)) {
				intersection.push(e)
			}
		})

		return Expense.insertMany(
			intersection.map((i) => ({
				amount: parseFloat(i.amount),
				description: i.description,
				category: category,
				owner: user,
				hash: crypto
					.createHash('md5')
					.update(i.amount + i.description)
					.digest('hex'),
			})),
		)
	})
}

module.exports = {
	addNewExpenses,
}

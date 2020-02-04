const express = require('express')
const _ = require('lodash')
const router = express.Router()

const { getBalance } = require('../lib/privat')
const { addNewExpenses } = require('../services/expense')

const Expense = require('../models/Expense')
const Category = require('../models/Category')
const User = require('../models/User')

router.get('/balance', (req, res) => {
	const { owner_id } = req.params

	getBalance('5363542306858664', '2020-01-21', '2020-01-22')
		.then((result) => {
			return addNewExpenses(
				_.get(result, 'response.data.info.statements.statement', []),
			)
		})
		.then((result) => {
			return res.send(result)
		})
		.catch((e) => {
			console.log(e)
			return res.send(e.message)
		})
})

router.get('/balance/:owner_id', function(req, res) {
	const { owner_id } = req.params

	getBalance('5363542306858664', '2020-01-21', '2020-01-22')
		.then((result) => {
			return addNewExpenses(
				_.get(result, 'response.data.info.statements.statement', []),
				owner_id,
				null,
			)
		})
		.then((result) => {
			return res.send(result)
		})
		.catch((e) => {
			console.log(e)
			return res.send(e.message)
		})
})

router.get('/balance/:owner_id/:category_id', function(req, res) {
	const { owner_id, category_id } = req.params

	getBalance('5363542306858664', '2020-01-21', '2020-01-22')
		.then((result) => {
			return addNewExpenses(
				_.get(result, 'response.data.info.statements.statement', []),
				owner_id,
				category_id,
			)
		})
		.then((result) => {
			return res.send(result)
		})
		.catch((e) => {
			console.log(e)
			return res.send(e.message)
		})
})

module.exports = router

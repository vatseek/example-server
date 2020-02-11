const express = require('express')
const crypto = require('crypto')
const router = express.Router()

const Expense = require('../models/Expense')

router.get('/', function(req, res) {
  Expense.find({})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/create', function(req, res) {
  const { amount, description, category, owner } = req.body
  const hash = crypto
    .createHash('md5')
    .update(amount + description)
    .digest('hex')
  const expense = new Expense({ amount, description, category, owner, hash })

  expense
    .save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/delete/:id', function(req, res) {
  Expense.findOneAndRemove({ _id: req.params.id })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router

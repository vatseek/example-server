const express = require('express')
const router = express.Router()

const Category = require('../models/Category')

router.get('/', function(req, res) {
  Category.find({})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/create', function(req, res) {
  const { name } = req.body
  const category = new Category({ name })
  category
    .save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/delete/:id', function(req, res) {
  Category.findOneAndRemove({ _id: req.params.id })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router

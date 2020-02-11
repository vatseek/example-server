const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.get('/', function(req, res) {
  User.find({})
    .then((users) => {
      res.json(users)
    })
    .catch(() => {
      res.json([])
    })
})

router.get('/create', function(req, res) {
  res.render('user/create')
})

router.get('/:login', function(req, res) {
  const { login } = req.params

  User.findOne({ login })
    .then((users) => {
      res.json(users)
    })
    .catch(() => {
      res.json([])
    })
})

router.post('/create', function(req, res) {
  const { login, password, age } = req.body

  const user = new User({ login, password, age })
  user
    .save()
    .then((result) => {
      res.redirect('/users/')
    })
    .catch(() => {
      res.redirect('/users/create', { login, password, age })
    })
})

module.exports = router

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

router.get('/user/create', function(req, res) {
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

router.post('/user/create', function(req, res) {
  const { login, password } = req.body

  const user = new User({ login, password })
  user
    .save()
    .then((result) => {
      res.redirect('/user/create')
    })
    .catch(() => {
      res.redirect('/user/create', { login, password })
    })
})

module.exports = router

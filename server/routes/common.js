const _ = require('lodash')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { passport, isAuth } = require('../lib/auth')
const { getBalance } = require('../lib/privat')
const { addNewExpenses } = require('../services/exprense')

router.get('/', function(req, res) {
  res.render('index', { username: req.user ? req.user.login : 'Anonymous' })
})

router.get('/login', function(req, res) {
  res.render('user/login')
})

router.post('/login', function(req, res) {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }
      const token = jwt.sign(user.toJSON(), 'secret')
      return res.json({ user, token })
    })
  })(req, res)
})

router.get('/logout', function(req, res) {
  req.logout()
  res.redirect('/login')
})

router.get('/protected', isAuth, function(req, res) {
  res.send('Welcome Protected Zone')
})

router.get('/balance', function(req, res) {
  getBalance('5363542306858664', '2020-01-21', '2020-01-22')
    .then((result) => {
      return addNewExpenses(_.get(result, 'response.data.info.statements.statement', []))
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

const _ = require('lodash')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { passport, isAuth } = require('../lib/auth')
const { getBalance } = require('../lib/privat')
const { addNewExpenses } = require('../services/expense')

const User = require('../models/User')

const CARD_ID = '5363542306858664'
const START_DATE = '2020-01-21'
const END_DATE = '2020-01-22'

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

router.post('/register', function(req, res) {
  const { username, password } = req.body
  const user = new User({ login: username, password })

  user
    .save()
    .then((result) => {
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
    .catch((err) => {
      console.log(err)
    })
})

router.get('/logout', function(req, res) {
  req.logout()
  res.redirect('/login')
})

router.get('/protected', isAuth, function(req, res) {
  res.send('Welcome Protected Zone')
})

router.get('/balance/:owner_id', function(req, res) {
  const { owner_id } = req.params

  getBalance(CARD_ID, START_DATE, END_DATE)
    .then((result) => {
      return addNewExpenses(_.get(result, 'response.data.info.statements.statement', []), owner_id, '')
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

  getBalance(CARD_ID, START_DATE, END_DATE)
    .then((result) => {
      return addNewExpenses(_.get(result, 'response.data.info.statements.statement', []), owner_id, category_id)
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

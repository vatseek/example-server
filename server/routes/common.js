const express = require('express')
const router = express.Router()

const auth = require('../lib/auth')

router.get('/', function(req, res) {
  res.render('index', { username: 'tt', env: process.env.NODE_ENV, names: [] })
})

router.get('/login', function(req, res) {
  res.render('user/login')
})

router.post('/login', auth.authorize('local'), function(req, res) {
  // TODO: check auth method
  res.redirect('/')
})

module.exports = router

const express = require('express')
const router = express.Router()

const { passport, isAuth } = require('../lib/auth')

router.get('/', function(req, res) {
  res.render('index', { username: req.user ? req.user.login : 'Anonymous' })
})

router.get('/login', function(req, res) {
  res.render('user/login')
})

router.get('/logout', function(req, res) {
  req.logout()
  res.redirect('/login')
})

router.post('/login', passport.authenticate('local', { session: true }), function(req, res) {
  res.redirect('/')
})

router.get('/protected', isAuth, function(req, res) {
  res.send('Welcome Protected Zone')
})

module.exports = router

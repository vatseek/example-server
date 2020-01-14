const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.get('/', function(req, res) {
  const user = new User({ login: 'test', password: '123123' })
  user
    .save()
    .then((result) => {
      console.log(result)
      res.send('Hello')
    })
    .catch((e) => {
      console.log(e)
      res.send(`Error: ${e.message}`)
    })
})

router.get('/:id', function(req, res) {
  const { id } = req.params
  res.send(`id:${id}`)
})

router.post('/', function(req, res) {
  res.send('About birds')
})

module.exports = router

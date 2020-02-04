const express = require('express')
const router = express.Router()

const Category = require('../models/Category')

router.get('/', function(req, res) {
    Category.find({})
    .then((categories) => {
      res.json(categories)
    })
    .catch(() => {
      res.json([])
    })
})

router.get('/all', function(req, res) {
  Category.find({})
    .then((categories) => {
      //res.json(users)
      console.log(categories)
      res.render('category/all',{categories})
    })
    .catch(() => {
      res.json([])
    })
})

router.get('/create', function(req, res) {
  res.render('category/create')
})

router.get('/:name', function(req, res) {
  const { name } = req.params

  Category.findOne({ name })
    .then((categories) => {
      res.json(categories) 
    })
    .catch(() => {
      res.json([])
    })
})

router.post('/create', function(req, res) {
  const { name } = req.body

  const category = new Category({ name })
  category
    .save()
    .then((result) => {
      res.redirect('/category/all')
    })
    .catch(() => {
      res.redirect('/category/all', { name })
    })
})

router.get('/delete/:id', function(req, res) {
  Category.findOneAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      return res.redirect("/category/all");
    }

    // req.flash("success", "Account has been deleted.");
    return res.redirect("/category/all");
  });
})




module.exports = router

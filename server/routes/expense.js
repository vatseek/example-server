const express = require("express");
const crypto = require("crypto");
const router = express.Router();

const User = require("../models/User");
const Expense = require("../models/Expense");
const Category = require("../models/Category");

router.get("/", function(req, res) {
  Expense.find({})
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/all", function(req, res) {
  Expense.find({})
    .then(expenses => {
      res.render("expense/all", { expenses });
    })
    .catch(() => {
      res.json([]);
    });
});

router.get("/create", function(req, res) {
  Category.find({})
    .then(categories => {
      User.find({}).then(users => {
        res.render("expense/create", { categories, users });
      });
    })
    .catch(() => {
      res.json([]);
    });
});

router.post("/create", function(req, res) {
  const { amount, description, category, owner } = req.body;
  const hash = crypto
    .createHash("md5")
    .update(amount + description)
    .digest("hex");
  const expense = new Expense({ amount, description, category, owner, hash });

  expense
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/delete/:id", function(req, res) {
    Expense.findOneAndRemove({ _id: req.params.id }, err => {
      if (err) {
        console.log(err)
      }
      return res.redirect("/expenses/all");
    });
  });

module.exports = router;

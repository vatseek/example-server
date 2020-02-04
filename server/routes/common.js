const _ = require("lodash");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const mongoose = require("mongoose");
const jsonParser = express.json();

const { passport, isAuth } = require("../lib/auth");
const { getBalance } = require("../lib/privat");
const { addNewExpenses } = require("../services/expense");

const Expense = require("../models/Expense");
const Category = require("../models/Category");
const User = require("../models/User");

router.get("/", function(req, res) {
  res.render("index", { username: req.user ? req.user.login : "Anonymous" });
});

router.get("/login", function(req, res) {
  res.render("user/login");
});

router.post("/login", function(req, res) {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user.toJSON(), "secret");
      return res.json({ user, token });
    });
  })(req, res);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/login");
});

router.get("/protected", isAuth, function(req, res) {
  res.send("Welcome Protected Zone");
});

router.get("/balance/:owner_id", function(req, res) {
  const { owner_id } = req.params;

  getBalance("5363542306858664", "2020-01-21", "2020-01-22")
    .then(result => {
      return addNewExpenses(
        _.get(result, "response.data.info.statements.statement", []),
        owner_id,
        ""
      );
    })
    .then(result => {
      return res.send(result);
    })
    .catch(e => {
      console.log(e);
      return res.send(e.message);
    });
});

router.get("/balance/:owner_id/:category_id", function(req, res) {
  const { owner_id, category_id } = req.params;

  getBalance("5363542306858664", "2020-01-21", "2020-01-22")
    .then(result => {
      return addNewExpenses(
        _.get(result, "response.data.info.statements.statement", []),
        owner_id,
        category_id
      );
    })
    .then(result => {
      return res.send(result);
    })
    .catch(e => {
      console.log(e);
      return res.send(e.message);
    });
});

router.get("/categories", function(req, res) {
  const { owner_id } = req.params;

  Category.find({})
    .then(result => {
      console.log(result);
      return res.send({result}) ;
      
    })
    .catch(e => {
      console.log(e);
      return res.send(e.message);
    });
});

router.get("/categories/all", function(req, res) {
  Category.find({})
    .then(categories => {
      //res.json(users)
      console.log(categories);
      res.render("category/all", { categories });
    })
    .catch(() => {
      res.json([]);
    });
});

router.get("/categories/create", function(req, res) {
  res.render("category/create");
});

router.get("/categories/:name", function(req, res) {
  const { name } = req.params;

  Category.findOne({ name })
    .then(categories => {
      res.json(categories);
    })
    .catch(() => {
      res.json([]);
    });
});

router.post("/categories/create", function(req, res) {
  const { name } = req.body;

  const category = new Category({ name });
  category
    .save()
    .then(result => {
      res.redirect("/categories/all");
    })
    .catch(() => {
      res.redirect("/category/create", { name });
    });
});

router.get("/categories/change/:id", function(req, res) {
  const { id } = req.params;
  Category.findById(id, (err, category) => {
    if (!err) {
      res.render("category/change", { category });
    }
  });
});

router.post('/categories/change/:id', function(req, res) {
    Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name || "Untitled Category",
    }, {new: true})
    .then(
      res.redirect('/categories/all', )
    )
    .catch(err => {
      console.log(err)
    })
      
    
})

router.get("/categories/delete/:id", function(req, res) {
  Category.findOneAndRemove({ _id: req.params.id }, err => {
    if (err) {
      return res.redirect("/categories/all");
    }
    return res.redirect("/categories/all");
  });
});




router.get("/expenses", function(req, res) {
  Expense.find({})
    .then(expense => {
      res.json(expense);
    })
    .catch(() => {
      res.json([]);
    });
});

router.get("/expenses/all", function(req, res) {
  Expense.find({})
    .then(expenses => {
      //res.json(users)
      console.log(expenses);
      res.render("expense/all", { expenses });
    })
    .catch(() => {
      res.json([]);
    });
});

router.get("/expenses/create", function(req, res) {
  res.render("expense/create");
});

router.get("/:amount", function(req, res) {
  const { amount } = req.params;

  Expense.findOne({ amount })
    .then(expenses => {
      res.json(expenses);
    })
    .catch(() => {
      res.json([]);
    });
});

router.post("/expenses/create", function(req, res) {
  const { amount, description, category, owner } = req.body;

  const expense = new Expense({ amount, description, category, owner });
  expense
    .save()
    .then(result => {
      res.redirect("/expenses/all");
    })
    .catch(() => {
      res.redirect("/expense/create", { amount, description, category, owner });
    });
});

router.get("/expenses/delete/:id", function(req, res) {
  Expense.findOneAndRemove({ _id: req.params.id }, err => {
    if (err) {
      return res.redirect("/expenses/all");
    }

    // req.flash("success", "Account has been deleted.");
    return res.redirect("/expenses/all");
  });
});

module.exports = router;

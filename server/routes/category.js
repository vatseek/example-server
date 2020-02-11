const express = require("express");
const router = express.Router();

const Category = require("../models/Category");

router.get("/", function(req, res) {
  Category.find({})
    .then(categories => {
      res.json(categories);
    })
    .catch(() => {
      res.json([]);
    });
});

router.get("/all", function(req, res) {
  Category.find({})
    .then(categories => {
      res.render("category/all", { categories });
    })
    .catch(() => {
      res.json([]);
    });
});

router.get("/create", function(req, res) {
  res.render("category/create");
});

router.get("/:name", function(req, res) {
  const { name } = req.params;

  Category.findOne({ name })
    .then(categories => {
      res.json(categories);
    })
    .catch(() => {
      res.json([]);
    });
});

router.post("/create", function(req, res) {
  const { name } = req.body;

  const category = new Category({ name });
  category
    .save()
    .then(result => {
      // res.send(result);
      res.redirect("/categories/all");
    })
    .catch(() => {
      console.log(err);
    });
});

router.get("/delete/:id", function(req, res) {
  Category.findOneAndRemove({ _id: req.params.id }, err => {
    if (err) {
      console.log(err);
    }

    return res.redirect("/categories/all");
  });
});

router.get("/change/:id", function(req, res) {
  const { id } = req.params;
  Category.findById(id, (err, category) => {
    if (!err) {
      res.render("category/change", { category });
    }
  });
});

router.post("/change/:id", function(req, res) {
  Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name || "Untitled Category"
    },
    { new: true }
  )
    .then(res.redirect("/categories/all"))
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;

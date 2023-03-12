const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/product");
});

router.get("/detail", (req, res, next) => {
  res.render("admin/product-detail");
});

router.get("/add", (req, res, next) => {
  res.render("admin/add-products");
});

router.get("/category", (req, res, next) => {
  res.render("admin/category");
});

router.get("/approve", (req, res, next) => {
  res.render("admin/product-grid");
});

router.get("/approve/view/", (req, res, next) => {
  res.render("admin/product-detail");
});

router.get("/view/", (req, res, next) => {
  res.render("admin/product-view");
});

module.exports = router;

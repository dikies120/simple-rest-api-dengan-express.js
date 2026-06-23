const express = require("express");
const productController = require("../controllers/product.js");

const product = express.Router();

product.get("/", productController.getAllProduct);


module.exports = product;
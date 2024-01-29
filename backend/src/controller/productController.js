/**
 * @author Amol Rathod
 */

const ProductSchema = require("../models/product");
const express = require("express");
const router = new express.Router();
const productroute = require("../services/productService/productRoute");

const productServicesFile = require("../services/productService/productServices");
const verifyToken = require("../common/verifyToken");

// used get all products
router.get("/", productroute.getAllProductsRoute);

// used get a single product by id
router.get("/:id", productroute.getSingleProductById);

// used update a product by id :i
router.put("/:id", productroute.updateSingleProductById);

// used add a new product
router.post("/", productroute.insertNewProductIntoProductList);

// used delete a product by id
router.delete("/:id", productroute.deleteCreatedProductById);

// used to delete all products
router.delete("/", productroute.deleteAllProducts);

// used get all products by category id
router.get("/categories/:id", productroute.getAllProductsByCategoryId);

// used get all products by brand id
router.get("/brands/:id", productroute.getAllProductsByBrandId);

module.exports = { router };

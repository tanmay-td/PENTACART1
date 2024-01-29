const express = require("express");

const router = new express.Router();

const productCategoryRoute = require("../services/productCategoryService/productCategoryRoute");
const {
  deleteAllProductCategories,
} = require("../services/productCategoryService/productCategoryServices");

// used get all product categories
router.get("/", productCategoryRoute.getAllProductCategories);

// used insert a new product category
router.post("/", productCategoryRoute.insertNewProductCategory);

// used get a single product brand by id
router.put("/:id", productCategoryRoute.updateSingleProductCategoryById);

// used get single product category :
router.get("/:id", productCategoryRoute.getASingleProductCategoryById);

// used delete single product category by id
router.delete("/:id", productCategoryRoute.deleteSingleProductCategory);

// used delete all product categories
router.delete("/", productCategoryRoute.deleteAllProductCategoriesFromRecord);

module.exports = { router };

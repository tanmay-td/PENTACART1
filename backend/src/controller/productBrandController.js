const express = require("express");

const router = new express.Router();

const productBrandRoute = require("../services/productBrandService/productBrandRoute");

// used to get all product brands
router.get("/", productBrandRoute.gelAllProductBrands);

// used to get single product brand by id 
router.get("/:id", productBrandRoute.getAProductBrandById);

// used to create new product brand
router.post("/", productBrandRoute.insertNewProductBrand);

// used to update single product brand by id 
router.put("/:id", productBrandRoute.updateProductBrandById);

// used to delete single product brand by id
router.delete("/:id", productBrandRoute.deleteSingleProductBrand);

// used to delete all product brands 
router.delete("/", productBrandRoute.deleteAllProductBrandsFromRecord);

module.exports = { router };

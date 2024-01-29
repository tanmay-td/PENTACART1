const express = require("express");

const {
  getAllProduct,
  getProductById,
  updateProductById,
  insertNewProduct,
  deleteProductById,
  deleteAllProductsFromRecord,
  getAllProductsUsingCategoryId,
  getAllProductsUsingBrandId,
} = require("../productService/productServices");

const ProductSchema = require("../../models/product");

// get all product
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getAllProductsRoute = async (req, res) => {
  try {
    const data = await getAllProduct();

    console.log(data);
    return res.send(JSON.stringify(data));
  } catch (error) {
    console.log("Route error");
    return res.status(400).json(error.message);
  }
};

// get product by id
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getSingleProductById = async (req, res) => {
  try {
    const result = await getProductById(req.params.id);

    console.log(
      `Details of product having id : ${req.params.id} ----> ${result}`
    );

    return res.send(JSON.stringify(result));
  } catch (error) {
    console.log("Error while fetching single product by its id.");
    return res.status(400).json({
      error: `Error while fetching the details of product having id ${req.params.id}`,
    });
  }
};

// update product by id
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateSingleProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const result = await updateProductById(productId, req.body);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    console.log("Error while updating single product by its id.");
    return res.status(400).json({
      error: `Error while updating the details of product having id ${req.params.id}`,
    });
  }
};

// insert new product
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const insertNewProductIntoProductList = async (req, res) => {
  try {
    const resultAfterInsertingNewProduct = await insertNewProduct(req.body);

    console.log(resultAfterInsertingNewProduct);
    res.send(JSON.stringify(resultAfterInsertingNewProduct));
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

// delete product by id
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteCreatedProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const resultAfterDeletingProduct = await deleteProductById(productId);

    console.log(resultAfterDeletingProduct);

    res.send(JSON.stringify(resultAfterDeletingProduct));
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: `Error while deleting single product. Error Message : ${error.message}`,
    });
  }
};

// deleting all product
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteAllProducts = async (req, res) => {
  try {
    const result = await deleteAllProductsFromRecord();

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: `Error occurred while deleting all products from record`,
    });
  }
};

// get products by category id :
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getAllProductsByCategoryId = async (req, res) => {
  const categoryId = req.params.id;

  console.log(categoryId);

  try {
    const result = await getAllProductsUsingCategoryId(categoryId);

    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: `Error occurred while fetching all products by category id`,
    });
  }
};

// get products by brand id :
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getAllProductsByBrandId = async (req, res) => {
  const brandId = req.params.id;

  try {
    const result = await getAllProductsUsingBrandId(brandId);

    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: `Error occurred while fetching all products by category id`,
    });
  }
};

module.exports = {
  getAllProductsRoute,
  getSingleProductById,
  updateSingleProductById,
  insertNewProductIntoProductList,
  deleteCreatedProductById,
  deleteAllProducts,
  getAllProductsByCategoryId,
  getAllProductsByBrandId,
};

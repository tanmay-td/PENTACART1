const express = require("express");

const {
  insertIntoProductCategory,
  getAllCategoriesFromRecord,
  getProductCategoryById,
  updateProductCategory,
  deleteProductCategoryById,
  deleteAllProductCategories,
} = require("../productCategoryService/productCategoryServices");

// get all product categories
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getAllProductCategories = async (req, res) => {
  try {
    const result = await getAllCategoriesFromRecord();

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// get a single product category by id
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getASingleProductCategoryById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getProductCategoryById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// insert new customer :
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const insertNewProductCategory = async (req, res) => {

  try {
    const result = await insertIntoProductCategory(req.body);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// update single product brand
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const updateSingleProductCategoryById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await updateProductCategory(id, req.body);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// / delete single category by id
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteSingleProductCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await deleteProductCategoryById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// delete all product brands
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllProductCategoriesFromRecord = async (req, res) => {
  const result = await deleteAllProductCategories();

  try {
    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllProductCategories,
  insertNewProductCategory,
  getASingleProductCategoryById,
  updateSingleProductCategoryById,
  deleteSingleProductCategory,
  deleteAllProductCategoriesFromRecord,
};

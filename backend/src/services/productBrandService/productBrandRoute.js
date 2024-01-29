const express = require("express");

const {
  insertNewBrand,
  getAllProductBrand,
  updateSingleProductBrand,
  deleteBrandById,
  deleteAllProductBrands,
  getSingleProductBrandById,
} = require("../productBrandService/productBrandServices");

// get all product brand
/**
 *
 * @param {*} req
 * @param {*} res
 */
const gelAllProductBrands = async (req, res) => {
  try {
    const result = await getAllProductBrand();

    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// get single product brand by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAProductBrandById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getSingleProductBrandById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// insert new product brand
/**
 *
 * @param {*} req
 * @param {*} res
 */
const insertNewProductBrand = async (req, res) => {

  try {
    const result = await insertNewBrand(req.body);

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
const updateProductBrandById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await updateSingleProductBrand(id, req.body);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// delete single brand by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteSingleProductBrand = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await deleteBrandById(id);

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
const deleteAllProductBrandsFromRecord = async (req, res) => {
  const result = await deleteAllProductBrands();

  try {
    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  gelAllProductBrands,
  getAProductBrandById,
  insertNewProductBrand,
  updateProductBrandById,
  deleteSingleProductBrand,
  deleteAllProductBrandsFromRecord,
};

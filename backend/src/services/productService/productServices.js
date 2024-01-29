/**
 * @author Amol Rathod
 */

const express = require("express");

const router = new express.Router();

const ProductSchema = require("../../models/product");

const ProductCategoriesSchema = require("../../models/productCategorySchema");

const { ObjectId } = require("mongodb");

// get all products detail
const getAllProduct = async () => {
  try {
    const getAllProducts = await ProductSchema.find({})
      .populate("brandId")
      .populate("categoryId");

    console.log(getAllProducts);

    return getAllProducts;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

// get product by id
const getProductById = async (id) => {
  try {
    const productDetailsHavingGivenId = await ProductSchema.findById(id)
      .populate("brandId")
      .populate("categoryId");

    console.log(productDetailsHavingGivenId);
    return productDetailsHavingGivenId;
  } catch (e) {
    console.log(e.message);
    return {
      error: `Error while fetching single product by its id. Error Message : ${e.message}`,
    };
  }
};

// update product by id
const updateProductById = async (id, body) => {
  try {
    const resultAfterUpdatingProduct = await ProductSchema.findByIdAndUpdate(
      id,
      body,
      { returnDocument: "after" }
    );

    console.log(resultAfterUpdatingProduct);
    return resultAfterUpdatingProduct;
  } catch (error) {
    return {
      error: `Error while updating the product by its id. Error Message : ${e.message}`,
    };
  }
};

// insert new product :
const insertNewProduct = async (body) => {
  try {
    const createProductName = await ProductSchema(body);

    let resultAfterCreationOfProduct = await createProductName.save();

    return resultAfterCreationOfProduct;
  } catch (e) {
    console.log(e);
    return {
      error: `Error while inserting new product . Error Message : ${e.message}`,
    };
  }
};

// delete product by id
const deleteProductById = async (id) => {
  try {
    const resultAfterDeletingProduct = await ProductSchema.findByIdAndDelete(
      id
    );

    console.log(resultAfterDeletingProduct);
    return resultAfterDeletingProduct;
  } catch (error) {
    // status code 500 for server related errors
    console.log(error);
    return {
      error: `Error occurred while deleting the the product having product id ${idOfSingleProduct}`,
    };
  }
};

// delete all products
const deleteAllProductsFromRecord = async () => {
  try {
    const resultAfterDeletingAllProducts = await ProductSchema.deleteMany({});

    console.log(resultAfterDeletingAllProducts);

    if (resultAfterDeletingAllProducts.deletedCount == 0) {
      return `There is no product available in record`;
    }

    return `All ${resultAfterDeletingAllProducts.deletedCount} deleted successfully.`;
  } catch (error) {
    return {
      error: `Error occurred deleting all products`,
    };
  }
};

// get all products list by using category id :
const getAllProductsUsingCategoryId = async (categoryId) => {
  console.log(categoryId);

  try {
    const result = await ProductSchema.find({ categoryId })
      .populate("categoryId")
      .populate("brandId");

    // const data = await ProductCategoriesSchema.find({name})

    // const result = await ProductSchema.find({categoryId : data.toObject()._id});

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error occurred getting all products by category id`,
    };
  }
};

const getAllProductsUsingBrandId = async (brandId) => {
  try {
    const result = await ProductSchema.find({ brandId })
      .populate("categoryId")
      .populate("brandId");

    // const data = await ProductCategoriesSchema.find({name})

    // const result = await ProductSchema.find({categoryId : data.toObject()._id});

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error occurred getting all products by category id`,
    };
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  updateProductById,
  insertNewProduct,
  deleteProductById,
  deleteAllProductsFromRecord,
  getAllProductsUsingCategoryId,
  getAllProductsUsingBrandId,
};

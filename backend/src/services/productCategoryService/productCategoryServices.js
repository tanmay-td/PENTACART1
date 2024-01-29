const express = require("express");

const router = new express.Router();

// const Productcategory = require("../../models/productCategorySchema");
const ProductCategorySchema = require("../../models/productCategorySchema");

// get all product categories
const getAllCategoriesFromRecord = async () => {
  try {
    const result = await ProductCategorySchema.find({});

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error occurred while displaying all product categories... Error Message : ${error.message}`,
    };
  }
};

// get a single product category by id
const getProductCategoryById = async (id) => {
  try {
    const result = await ProductCategorySchema.findById(id);

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error occurred while displaying all product categories... Error Message : ${error.message}`,
    };
  }
};

// insert new product category
const insertIntoProductCategory = async (body) => {
  try {
    const insertProductCategory = ProductCategorySchema(body);

    let resultAfterInsertingProductCategory =
      await insertProductCategory.save();

    console.log(resultAfterInsertingProductCategory);

    return resultAfterInsertingProductCategory;
  } catch (error) {
    console.log(error);
    return {
      error: `Error occurred while inserting new product category... Error Message : ${error.message}`,
    };
  }
};

// update single product brand
const updateProductCategory = async (id, body) => {
  try {
    const result = await ProductCategorySchema.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });

    console.log(result);
    return result;
  } catch (error) {
    return {
      error: `Error occurred while updating single product category. Error Message : ${error.message}`,
    };
  }
};

// delete product brand by id
const deleteProductCategoryById = async (id) => {
  try {
    const result = await ProductCategorySchema.findByIdAndDelete(id);

    console.log(result);
    return result;
  } catch (error) {
    return {
      error: `Error occurred while deleting single product category. Error Message : ${error.message}`,
    };
  }
};

// delete all product brands
const deleteAllProductCategories = async () => {
  try {
    const result = await ProductCategorySchema.deleteMany();

    console.log(result);

    if (result.deletedCount == 0) {
      return `There is no product category available in record`;
    }

    return `All ${result.deletedCount} product categories deleted successfully.`;
  } catch (error) {
    return {
      error: `Error occurred while deleting all product categories from record`,
    };
  }
};

module.exports = {
  getAllCategoriesFromRecord,
  insertIntoProductCategory,
  getProductCategoryById,
  updateProductCategory,
  deleteProductCategoryById,
  deleteAllProductCategories,
};

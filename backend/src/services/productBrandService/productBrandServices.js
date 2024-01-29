const express = require("express");

const ProductBrandSchema = require("../../models/productBrandSchema");

// insert new brand :
const insertNewBrand = async (body) => {
  try {
    const insertBrand = await new ProductBrandSchema(body);

    const resultAfterInsertingNewBrand = await insertBrand.save();

    console.log(resultAfterInsertingNewBrand);

    return resultAfterInsertingNewBrand;
  } catch (error) {
    return {
      error: `Error occurred while inserting new product brand.. Error Message : ${error.message}`,
    };
  }
};

const getAllProductBrand = async () => {
  try {
    const getAllBrands = await ProductBrandSchema.find({});

    console.log(getAllBrands);

    return getAllBrands;
  } catch (error) {
    return {
      error: `Error occurred while getting all product brands. Error Message : ${error.message}`,
    };
  }
};

// get a single product brand 
const getSingleProductBrandById = async (id) => {
  try {
    const result = await ProductBrandSchema.findById(id);

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error occurred getting details of single product brand by id. Error Message : ${error.message}`,
    };
  }
}

// update single product brand
const updateSingleProductBrand = async (id, body) => {
  try {
    const resultAfterUpdatingProduct =
      await ProductBrandSchema.findByIdAndUpdate(
        id,
        body,
        { returnDocument: "after" }
      );

    console.log(resultAfterUpdatingProduct);
    return resultAfterUpdatingProduct;
  } catch (error) {
    return {
      error: `Error occurred while updating single product brand. Error Message : ${error.message}`,
    };
  }
};

// delete product brand by id 
const deleteBrandById = async (id) => {
  try {
    const resultAfterDeletingProduct =
      await ProductBrandSchema.findByIdAndDelete(id);

    console.log(resultAfterDeletingProduct);
    return resultAfterDeletingProduct;
  } catch (error) {
    return {
      error: `Error occurred while deleting single product brand. Error Message : ${error.message}`,
    };
  }
};

// delete all product brands
const deleteAllProductBrands = async () => {
  try {
    const result = await ProductBrandSchema.deleteMany();

    console.log(result);

    if (result.deletedCount == 0) {
      return `There is no product brand available in record`;
    }

    return `All ${result.deletedCount} product brands deleted successfully.`;
  } catch (error) {
    return {
      error: `Error occurred while deleting all product brands from record`,
    };
  }
}

module.exports = {
  insertNewBrand,
  getAllProductBrand,
  updateSingleProductBrand,
  deleteBrandById,
  deleteAllProductBrands,
  getSingleProductBrandById,
};

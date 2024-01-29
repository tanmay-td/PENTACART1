const express = require("express");

const router = new express.Router();

const AdminHomeImagesSchema = require("../../models/adminHomeImages");

// get all images for admin page
const getAllImagesOnAdminPage = async () => {
  try {
    const result = await AdminHomeImagesSchema.find({});

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error occurred while displaying all images for admin page.`,
      message: `${error.message}`,
    };
  }
};

// get a single image for admin page
const getSingleImageOnAdminPageById = async (id) => {
  try {
    const result = await AdminHomeImagesSchema.findById(id);

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error occurred while displaying single image for admin page.`,
      message: `${error.message}`,
    };
  }
};

// insert new image for admin page
const insertNewImageOnAdminPage = async (body) => {
  try {
    const insertProductCategory = AdminHomeImagesSchema(body);

    let result = await insertProductCategory.save();

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error occurred while inserting new image for admin page`,
      message: `${error.message}`,
    };
  }
};

// update single image by id for admin page
const updateSingleImageOnAdminPageById = async (id, body) => {
  try {
    const result = await AdminHomeImagesSchema.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });

    console.log(result);
    return result;
  } catch (error) {
    return {
      error: `Error occurred while updating single product category.`,
      message: `${error.message}`,
    };
  }
};

// delete single image by id for admin page
const deleteASingleImageOnAdminPageById = async (id) => {
  try {
    const result = await ProductCategorySchema.findByIdAndDelete(id);

    console.log(result);
    return result;
  } catch (error) {
    return {
      error: `Error occurred while deleting single image for admin page.`,
      message: `${error.message}`,
    };
  }
};

module.exports = {
  getAllImagesOnAdminPage,
  getSingleImageOnAdminPageById,
  insertNewImageOnAdminPage,
  updateSingleImageOnAdminPageById,
  deleteASingleImageOnAdminPageById,
};

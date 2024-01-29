const express = require("express");

const {
  getAllImagesOnAdminPage,
  getSingleImageOnAdminPageById,
  insertNewImageOnAdminPage,
  updateSingleImageOnAdminPageById,
  deleteASingleImageOnAdminPageById,
} = require("../adminHomeImagesService/adminImagesServices");

// get all images for admin home page
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllImageForAdminPage = async (req, res) => {
  try {
    const result = await getAllImagesOnAdminPage();

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// get a single image for admin home page
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getSingleImageByIdImageForAdminPage = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getSingleImageOnAdminPageById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// insert a new image for admin home page
/**
 *
 * @param {*} req
 * @param {*} res
 */
const insertNewImageForAdminPage = async (req, res) => {
  try {
    const result = await insertNewImageOnAdminPage(req.body);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// update single single image for admin home page
/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateSingleImageByIdImageForAdminPage = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await updateSingleImageOnAdminPageById(id, req.body);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// / delete single image for admin home page
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteSingleImageByIdImageForAdminPage = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await deleteASingleImageOnAdminPageById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllImageForAdminPage,
  getSingleImageByIdImageForAdminPage,
  insertNewImageForAdminPage,
  updateSingleImageByIdImageForAdminPage,
  deleteSingleImageByIdImageForAdminPage,
};

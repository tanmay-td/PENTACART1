const express = require("express");

const {
  getAllCustomerAddressFromRecord,
  insertNewCustomerAddress,
  getCustomerAddressById,
  updateACustomerAddressById,
  deleteACustomerById,
} = require("../customerAddressService/customerAddressServices.js");

// get all customer address
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllCustomerAddresses = async (req, res) => {
  try {
    const result = await getAllCustomerAddressFromRecord();

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// get single customer by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getSingleCustomerAddressById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getCustomerAddressById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// insert customer address
/**
 *
 * @param {*} req
 * @param {*} res
 */
const insertANewCustomerAddress = async (req, res) => {
  const { customerId, address } = req.body;

  try {
    const result = await insertNewCustomerAddress(customerId, address);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// update customer address
/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateCustomerAddressById = async (req, res) => {
  const id = req.params.id;
  const { customerId, address } = req.body;

  try {
    const result = await updateACustomerAddressById(id, customerId, address);

    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// delete customer address by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteCustomerAddressById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await deleteACustomerById(id);
    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllCustomerAddresses,
  insertANewCustomerAddress,
  getSingleCustomerAddressById,
  updateCustomerAddressById,
  deleteCustomerAddressById,
};

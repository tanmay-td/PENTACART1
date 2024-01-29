const express = require("express");

const {
  getAllCartDetails,
  createNewCart,
  getCartById,
  getCartByCustomerId,
  updateCartById,
  deleteCartById,
  updateCartByCustomerIdf,
} = require("../cartService/cartServices");

// get complete cart detail :
const getAllCartInformation = async (req, res) => {
  try {
    const result = await getAllCartDetails();
    console.log(result);
    return res.send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

// create new cart in database
const createNewCartInDatabase = async (req, res) => {
  try {
    const result = await createNewCart(req.body);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

// get cart by Id :
const getCartByCartId = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getCartById(id);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

// get cart details by customer id
const getCartBySingleCustomerId = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getCartByCustomerId(id);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

// update cart by Id :
const updateCartByCartId = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await updateCartById(id, req.body);

    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

// update cart by Id :
const updateCartByCustomerId = async (req, res) => {
  const id = req.params.id;
  console.log("update Id : ", id);
  console.log("request : ", req.body);

  try {
    const result = await updateCartByCustomerIdf(id, req.body);

    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

// delete cart by Id :
const deleteCartByCartId = async (req, res) => {
  const id = req.params.id;

  try {
    const result = deleteCartById(id);

    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCartInformation,
  createNewCartInDatabase,
  getCartByCartId,
  getCartBySingleCustomerId,
  updateCartByCartId,
  deleteCartByCartId,
  updateCartByCustomerId,
};

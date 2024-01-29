const express = require("express");

const {
  getAllProductOrdersFromRecord,
  insertANewProductOrder,
  getSingleProductOrderById,
} = require("../productOrderService/productOrderServices");

// get all product orders
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllProductOrders = async (req, res) => {
  try {
    const result = await getAllProductOrdersFromRecord();

    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// insert new product order
/**
 *
 * @param {*} req
 * @param {*} res
 */
const insertNewProductOrder = async (req, res) => {
  const {
    productId,
    customerId,
    orderQuantity,
    totalOrderPrice,
    billingAddress,
    orderStatus,
  } = req.body;

  try {
    const result = await insertANewProductOrder(
      productId,
      customerId,
      orderQuantity,
      totalOrderPrice,
      billingAddress,
      orderStatus
    );

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// get a single product order by id
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getASingleProductOrderById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getSingleProductOrderById(id);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  insertNewProductOrder,
  getAllProductOrders,
  getASingleProductOrderById,
};

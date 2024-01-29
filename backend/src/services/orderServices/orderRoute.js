const express = require("express");

const {
  getAllOrders,
  createNewOrder,
  deleteOrderByCustomerId,
  updateOrderByCustomerId,
  getOrderByCustomerId,
  deleteAllOrdersOfCustomer,
} = require("../orderServices/orderService");
const { create } = require("../../models/product");
const OrderSchema = require("../../models/orderSchema");

// GET ALL ORDERS
const getAllOrdersOfCustomer = async (req, res) => {
  try {
    const result = await getAllOrders();

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// CREATE NEW ORDER
const createNewOrderForCustomer = async (req, res) => {
  const body = req.body;

  try {
    const result = await createNewOrder(body);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

// UPDATE ORDER BY CUSTOMER ID
const updateOrderByUsingCustomerId = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await updateACustomerAddressById(id, req.body);

    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

// DELETE ORDER BY CUSTOMER ID
const deleteOrderByCustomerIdFromDatabase = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteOrderByCustomerId(id);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

// GET ORDER BY CUSTOMER ID
const getOrderBySingleCustomerId = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getOrderByCustomerId(id);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

// DELETE ALL ORDERS
const deleteAllOrdersOfCustomerByCustomerId = async (req, res) => {
  try {
    const result = await deleteAllOrdersOfCustomer();
    console.log(result);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllOrdersOfCustomer,
  getOrderBySingleCustomerId,
  createNewOrderForCustomer,
  deleteOrderByCustomerIdFromDatabase,
  updateOrderByUsingCustomerId,
  deleteAllOrdersOfCustomerByCustomerId,
};

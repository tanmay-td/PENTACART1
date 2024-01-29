const express = require("express");

const router = new express.Router();

const orderRoute = require("../services/orderServices/orderRoute");

router.get("/", orderRoute.getAllOrdersOfCustomer);

router.post("/", orderRoute.createNewOrderForCustomer);

router.get("/customer/:id", orderRoute.getOrderBySingleCustomerId);

router.put("/:id", orderRoute.updateOrderByUsingCustomerId);

router.delete("/customer/:id", orderRoute.deleteOrderByCustomerIdFromDatabase);

router.delete("/", orderRoute.deleteAllOrdersOfCustomerByCustomerId);

module.exports = { router };

const express = require("express");

const router = new express.Router();

const productOrderRoute = require(".././services/productOrderService/productOrderRoute");

// used to get all product orders
router.get("/", productOrderRoute.getAllProductOrders);

// used to create new product order
router.post("/", productOrderRoute.insertNewProductOrder);

// used to get single product order by id
router.put("/:id", productOrderRoute.getASingleProductOrderById);

module.exports = { router };

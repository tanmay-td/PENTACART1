const express = require("express");

const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductSchema",
    require: true,
  },

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CustomerSchema",
    require: true,
    unique: true,
  },

  orderQuantity: {
    type: Number,
    require: true,
    unique: true,
  },

  totalOrderPrice: {
    type: Number,
    require: true,
  },

  billingAddress: {
    type: String,
    require: true,
  },

  orderStatus : {
    type : String,
    require : true
  },

  orderedDate: {
    type: Date,
    default: Date.now,
  },
});

const ProductOrderSchema = new mongoose.model(
  "Product_Order",
  productOrderSchema
);

module.exports = ProductOrderSchema;

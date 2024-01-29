const express = require("express");

const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  brandname: {
    type: String,
    require: true,
    unique: true,
  },

  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "ProductCategorySchema",
  // },

  createdat: {
    type: Date,
    default: Date.now(),
  },

  updatedat: {
    type: Date,
    default: Date.now(),
  },
});

const PaymentSchema = new mongoose.model("PaymentSchema", paymentSchema);

module.exports = PaymentSchema;

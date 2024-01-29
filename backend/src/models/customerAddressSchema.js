const express = require("express");

const mongoose = require("mongoose");

const customerAddressSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },

  address: {
    type: String,
    require: true,
  },
});

const CustomerAddressSchema = new mongoose.model(
  "Customer_Address",
  customerAddressSchema
);

module.exports = CustomerAddressSchema;

const express = require("express");

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productImageUrl: {
    type: String,
    require: true,
  },
  productName: {
    type: String,
    require: true,
    unique: true,
  },
  productDescription: {
    type: String,
    require: true,
  },
  productPrice: {
    type: String,
    require: true,
  },
  productStockQuantity: {
    type: Number,
    require: true,
  },
  productOffers: {
    type: String,
    require: true,
  },
  productRating: {
    type: Number,
    require: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductBrand",
  },
  createdDate: {
    type: Date,
    default: Date.now,
    require: true,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

const ProductSchema = mongoose.model("Product", productSchema);

module.exports = ProductSchema;

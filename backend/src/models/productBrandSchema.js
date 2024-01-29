const mongoose = require("mongoose");

const productBrandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    require: true,
    unique: true,
  },

  brandImageUrl: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const ProductBrandSchema = new mongoose.model(
  "ProductBrand",
  productBrandSchema
);

module.exports = ProductBrandSchema;

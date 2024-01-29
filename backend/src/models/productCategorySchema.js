const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    require: true,
    // unique: true,
  },

  categoryImageUrl: {
    type: String,
    require: true,
  },

  // insert it when project is live
  // brandId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "ProductBrandSchema",
  // },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const ProductCategorySchema = new mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategorySchema;

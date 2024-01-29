const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true,
      },
      quntity: {
        type: Number,
        required: true,
      },
    },
  ],

  total: {
    type: Number,
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
});

const CartSchema = new mongoose.model("Cart", cartSchema);

module.exports = CartSchema;

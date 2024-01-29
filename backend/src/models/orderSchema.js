const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
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
    order_status: {
      type: String,
      required: true,
    },
    total: { type: Number, required: true },
    shipping_address: { type: String, required: true },
    // payment_status: { type: String, required: true },
  },
  { timestamps: true }
);

const OrderSchema = mongoose.model("Order", orderSchema);

module.exports = OrderSchema;

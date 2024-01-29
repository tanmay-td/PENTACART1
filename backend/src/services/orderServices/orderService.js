const express = require("express");

const OrderSchema = require("../../models/orderSchema");

// Get all order
const getAllOrders = async () => {
  try {
    const result = await OrderSchema.find({})
      .populate("products.productId")
      .populate("customerId");

    console.log("All orders : ", result);

    return result;
  } catch (error) {
    return {
      error: `Error occurred while getting all orders.`,
      message: `${error.message}`,
    };
  }
};

// GET CART BY CUSTOMER ID
const getOrderByCustomerId = async (id) => {
  try {
    const result = await OrderSchema.find({ customerId: id })
      .populate("products.productId")
      .populate("customerId");

    console.log(`Get order by customer id : \n${result}`);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while getting order by customer id. `,
      message: `${error.message}`,
    };
  }
};

// Create new order
const createNewOrder = async (body) => {
  try {
    const result = await new OrderSchema(body);

    const saveResult = await result.save();

    console.log("New order : ", saveResult);

    return {
      message: `Order create successfully`,
      saveResult,
    };
  } catch (error) {
    return {
      error: `Error occurred while getting all orders.`,
      message: `${error.message}`,
    };
  }
};

// Update order by customer Id
const updateOrderByCustomerId = async (id, body) => {
  try {
    const result = await CustomerAddressSchema.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });

    console.log(result);
    return result;
  } catch (error) {
    return {
      error: `Error while updating customer order`,
      message: `${error.message}`,
    };
  }
};

// Delete order by customer id :
const deleteOrderByCustomerId = async (id) => {
  console.log("Id : ", id);
  try {
    const result = await OrderSchema.findOneAndDelete({
      customerId: id,
    });

    console.log("Delete order by customer id : ", result);

    return {
      message: `Order is delete successfully`,
      result,
    };
  } catch (error) {
    return {
      error: `Error occurred while getting all orders.`,
      message: `${error.message}`,
    };
  }
};

// Delete all customer order
const deleteAllOrdersOfCustomer = async () => {
  try {
    const resultAfterDeletingAllProducts = await OrderSchema.deleteMany({});

    console.log(resultAfterDeletingAllProducts);

    if (resultAfterDeletingAllProducts.deletedCount == 0) {
      return `There is no order available in record`;
    }

    return `All ${resultAfterDeletingAllProducts.deletedCount} deleted successfully.`;
  } catch (error) {
    return {
      error: `Error occurred deleting all products`,
      message: `${error.message}`,
    };
  }
};

module.exports = {
  getAllOrders,
  createNewOrder,
  getOrderByCustomerId,
  deleteOrderByCustomerId,
  updateOrderByCustomerId,
  deleteAllOrdersOfCustomer,
};

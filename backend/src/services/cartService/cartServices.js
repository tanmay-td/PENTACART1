const express = require("express");

const CartSchema = require("../../models/cartSchema");

// get all cart details
const getAllCartDetails = async () => {
  try {
    const result = await CartSchema.find({})
      .populate("products.productId")
      .populate("customerId");

    console.log(`Complete Cart : \n${result}`);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while getting complete cart details. `,
      message: `${error.message}`,
    };
  }
};

// create cart by :
const createNewCart = async (body) => {
  console.log(`Cart Body : \n${body}`);
  try {
    const result = await new CartSchema(body);

    // Write this validation
    if (!body) {
      return { error: `Please insert all the fields.` };
    }

    const finalResult = await result.save();

    console.log("Newly Created Cart : ", finalResult);

    return finalResult;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while creating new cart. `,
      message: `${error.message}`,
    };
  }
};

// get cart by id :
const getCartById = async (id) => {
  try {
    const result = await CartSchema.find({ _id: id });

    console.log(`Get Cart by Id : \n${result}`);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while getting cart by id. `,
      message: `${error.message}`,
    };
  }
};

// get cart by customer id :
const getCartByCustomerId = async (id) => {
  try {
    const result = await CartSchema.find({ customerId: id })
      .populate("products.productId")
      .populate("customerId");

    console.log(`Get cart by customer id : \n${result}`);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while getting cart by customer id. `,
      message: `${error.message}`,
    };
  }
};

// update cart by id :
const updateCartById = async (id, body) => {
  console.log("Cart Id : ", id);
  console.log("Cart Body : ", body);
  try {
    const result = await CartSchema.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while updating cart its id.`,
      message: `${error.message}`,
    };
  }
};

// update cart by id :
const updateCartByCustomerIdf = async (id, body) => {
  console.log("Cart Id : ", id);
  console.log("Cart Body : ", body);
  try {
    const result = await CartSchema.find({ customerId: id }).updateOne(body);

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while updating cart its id.`,
      message: `${error.message}`,
    };
  }
};

//delete cart by id :
const deleteCartById = async (id) => {
  console.log(`Cart Id for deletion : ${id}`);
  try {
    const result = await CartSchema.findByIdAndDelete(id);

    console.log("After deletion : ", result);

    return result;
  } catch (error) {
    console.log(error);
    return {
      error: `Error while deleting cart its id.`,
      message: `${error.message}`,
    };
  }
};

module.exports = {
  getAllCartDetails,
  createNewCart,
  getCartById,
  getCartByCustomerId,
  updateCartById,
  deleteCartById,
  updateCartByCustomerIdf,
};

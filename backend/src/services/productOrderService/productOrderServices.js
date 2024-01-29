const express = require("express");

const ProductOrderSchema = require("../../models/productOrderSchema");
const { ObjectId } = require("mongodb");

// get all product orders
const getAllProductOrdersFromRecord = async () => {
  try {
    const result = await ProductOrderSchema.find({});

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error while fetching details of all product orders. Error Message : ${e.message}`,
    };
  }
};

// insert new product order
const insertANewProductOrder = async (
  productId,
  customerId,
  orderQuantity,
  totalOrderPrice,
  billingAddress,
  orderStatus
) => {
  try {
    const createNewProductOrder = await new ProductOrderSchema({
      productId,
      customerId,
      orderQuantity,
      totalOrderPrice,
      billingAddress,
      orderStatus,
    });

    const result = await createNewProductOrder.save();

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error while inserting new product order. Error Message : ${e.message}`,
    };
  }
};

// get a single product order by id
const getSingleProductOrderById = async (id) => {
  try {
    const result = await ProductOrderSchema.findById(id);
    if (result == null) {
      return { error: `${id} this id does not exists in database` };
    }

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error while getting a single product order. Error Message : ${e.message}`,
    };
  }
};

module.exports = {
  getAllProductOrdersFromRecord,
  insertANewProductOrder,
  getSingleProductOrderById,
};

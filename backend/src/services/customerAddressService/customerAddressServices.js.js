const express = require("express");

const CustomerAddressSchema = require("../../models/customerAddressSchema");

// get all customer address
const getAllCustomerAddressFromRecord = async () => {
  try {
    const result = await CustomerAddressSchema.find({}).populate("customerId");

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error while displaying all customers address. Error Message : ${e.message}`,
    };
  }
};

// get customer address by id
const getCustomerAddressById = async (id) => {
  try {
    const result = await CustomerAddressSchema.find({ customerId: id });

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error while getting individual customers address by id. Error Message : ${e.message}`,
    };
  }
};

// insert new customer address
const insertNewCustomerAddress = async (customerId, address) => {
  try {
    const createAddress = await new CustomerAddressSchema({
      customerId,
      address,
    });

    const result = await createAddress.save();

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error while inserting new customer address . Error Message : ${e.message}`,
    };
  }
};

// update customer address by id
const updateACustomerAddressById = async (id, customerId, address) => {
  try {
    const result = await CustomerAddressSchema.findByIdAndUpdate(
      id,
      {
        customerId,
        address,
      },
      { returnDocument: "after" }
    );

    console.log(result);
    return result;
  } catch (error) {
    return {
      error: `Error while updating customer address. Error Message : ${e.message}`,
    };
  }
};

// delete customer address by id
const deleteACustomerById = async (id) => {
  try {
    const result = await CustomerAddressSchema.findByIdAndDelete(id);

    if (result == null) {
      return {
        error: `There is no customer address record present...The customer address is empty`,
      };
    }

    console.log(result);
    return result;
  } catch (error) {
    return {
      error: `Error while deleting customer address. Error Message : `,
      message: `${error.message}`,
    };
  }
};

module.exports = {
  getAllCustomerAddressFromRecord,
  insertNewCustomerAddress,
  getCustomerAddressById,
  updateACustomerAddressById,
  deleteACustomerById,
};

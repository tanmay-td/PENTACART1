const express = require("express");

const CustomerSchema = require("../../models/customerSchema");

// get a single customer by id
/**
 *
 * @param {*} id
 * @returns
 */
// const getCustomerById = async (id) => {
//   try {
//     const displaySingeCustomerById = await CustomerSchema.findById(id);

//     console.log(displaySingeCustomerById);
//     return displaySingeCustomerById;
//   } catch (error) {
//     console.log(error);
//     return {
//       error: `Error while fetching details of customer having id ${id}. Error Message : ${error.message}`,
//     };
//   }
// };

const getCustomerById = async (id) => {
  try {
    const displaySingeCustomerById = await CustomerSchema.findById(id);

    console.log("Customer id : ", displaySingeCustomerById);
    return displaySingeCustomerById;
  } catch (e) {
    console.log(e.message);
    return {
      error: `Error while fetching single customer by its id. Error Message : ${e.message}`,
    };
  }
};

// get single customer by email
const getCustomerByEmail = async (customerEmail) => {
  try {
    const displaySingeCustomerByEmail = await CustomerSchema.findOne({
      customerEmail: customerEmail,
    });

    console.log(displaySingeCustomerByEmail);
    return displaySingeCustomerByEmail;
  } catch (error) {
    return {
      error: `Error while fetching details of customer having email ${customerEmail}. Error Message : ${error.message}`,
    };
  }
};

// get single customer by phone number
const getCustomerByPhoneNumber = async (customerPhone) => {
  try {
    const displaySingeCustomerByEmail = await CustomerSchema.findOne({
      customerPhone: customerPhone,
    });

    console.log(displaySingeCustomerByEmail);
    return displaySingeCustomerByEmail;
  } catch (error) {
    return {
      error: `Error while fetching details of customer having phone number ${customerPhone}`,
      message: `${error.message}`,
    };
  }
};

// insert new customer
/**
 *
 * @param {}
 * @returns
 */
const insertNewCustomer = async (
  customerFirstName,
  customerLastName,
  customerPhone,
  customerEmail,
  customerPassword,
  customerAddress
) => {
  try {
    const insertNewCustomerSchema = await new CustomerSchema({
      customerFirstName,
      customerLastName,
      customerPhone,
      customerEmail,
      customerPassword,
      customerAddress,
    });

    const userAlreadyExist = await CustomerSchema.findOne({
      customerEmail: customerEmail,
    });

    if (userAlreadyExist) {
      return {
        error: `Customer already exists`,
      };
    }
    // if (
    //   !customerFirstName ||
    //   !customerLastName ||
    //   !customerPhone ||
    //   !customerEmail ||
    //   !customerPassword ||
    //   !customerAddress
    // ) {
    //   return {
    //     error: `Please insert all the fields`,
    //   };
    // }

    // Password hashing :

    let resultAfterCreationOfCustomer = await insertNewCustomerSchema.save();
    console.log(resultAfterCreationOfCustomer);

    return {
      message: "Customer registered successfully",
      resultAfterCreationOfCustomer,
    };
  } catch (e) {
    console.log(e);
    return {
      error: `Error while inserting new customer.`,
      message: `${e.message}`,
    };
  }
};

// show all customer :
/**
 *
 * @param {}
 * @returns
 */
const showAllCustomerDetails = async () => {
  try {
    const getAllCustomer = await CustomerSchema.find({});

    console.log(getAllCustomer);

    return getAllCustomer;
  } catch (error) {
    console.log(error);

    return {
      error: `Error while displaying all customers details. Error Message : ${e.message}`,
    };
  }
};

// update customer by id
/**
 *
 * @param {}
 * @returns
 */
const updateCustomerById = async (
  id,
  customerFirstName,
  customerLastName,
  customerPhone,
  customerEmail,
  customerPassword,
  customerAddress
) => {
  try {
    const resultAfterUpdatingCustomer = await CustomerSchema.findByIdAndUpdate(
      id,
      {
        customerFirstName,
        customerLastName,
        customerPhone,
        customerEmail,
        customerPassword,
        customerAddress,
      },
      { returnDocument: "after" }
    );

    console.log(resultAfterUpdatingCustomer);
    return resultAfterUpdatingCustomer;
  } catch (error) {
    // status code 500 for server related errors
    return {
      error: `Error occurred while updating the the customer having customer id ${id}`,
    };
  }
};

// delete single customer by Id
/**
 *
 * @param {}
 * @returns
 */
const deleteCustomerById = async (id) => {
  try {
    const resultAfterDeletingCustomer = await CustomerSchema.findByIdAndDelete(
      id
    );

    console.log(resultAfterDeletingCustomer);
    return resultAfterDeletingCustomer;
  } catch (error) {
    // status code 500 for server related errors
    return {
      error: `Error occurred while deleting the the customer having customer id ${idOfSingleCustomer}`,
    };
  }
};

// delete all customers
/**
 *
 * @param {}
 * @returns
 */
const deleteAllCustomers = async () => {
  try {
    const resultAfterDeletingAllCustomers = await CustomerSchema.deleteMany();

    if (resultAfterDeletingAllCustomers.deletedCount == 0) {
      return `There is no customers available in record`;
    }

    console.log(resultAfterDeletingAllCustomers);
    return `All ${resultAfterDeletingAllCustomers.deletedCount} customers deleted successfully.`;
  } catch (error) {
    return {
      error: `Error occurred deleting all customers from record`,
    };
  }
};

module.exports = {
  insertNewCustomer,
  showAllCustomerDetails,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
  deleteAllCustomers,
  getCustomerByEmail,
  getCustomerByPhoneNumber,
};

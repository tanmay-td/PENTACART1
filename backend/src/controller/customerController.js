/**
 * @author Amol Rathod
 */

/**
 * @author : Amol Rathod
 */

const express = require("express");

const router = new express.Router();

const customerRoute = require("../services/customerServices/customerRoute");

// used create new customer
router.post("/", customerRoute.insertANewCustomer);

// used to display all customers list
router.get("/", customerRoute.getAllCustomersDetails);

// validate customer by using email id
router.post("/email/customer", customerRoute.validateCustomerByEmail);

// used to display single customer by phone number
router.get(
  "/phone/:customerPhone",
  customerRoute.getSingleCustomerByPhoneNumber
);

// used to to display single customer by email
router.get("/email/:customerEmail", customerRoute.getSingleCustomerByEmail);

// used to get single customer by id
router.get("/:id", customerRoute.getSingleCustomerById);

// used to update single customer by id
router.put("/:id", customerRoute.updateSingleCustomerById);

// used to delete single customer by id
router.delete("/:id", customerRoute.deleteSingleCustomerById);

// used to delete all customers
router.delete("/", customerRoute.deleteAllCustomersFromRecord);

module.exports = { router };

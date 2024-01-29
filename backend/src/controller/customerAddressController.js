/**
 * @author : Amol Rathod
 */

const express = require("express");

const router = new express.Router();

const customerAddressRoute = require("../services/customerAddressService/customerAddressRoute");

// used get all the customer address details
router.get("/", customerAddressRoute.getAllCustomerAddresses);

// used insert new customer address
router.post("/", customerAddressRoute.insertANewCustomerAddress);

// used to get customer address by id
router.get("/:id", customerAddressRoute.getSingleCustomerAddressById);

// used to update customer address by id
router.put("/:id", customerAddressRoute.updateCustomerAddressById);

// used to delete customer address by id
router.delete("/:id", customerAddressRoute.deleteCustomerAddressById);

module.exports = { router };

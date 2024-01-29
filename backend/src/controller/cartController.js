const express = require("express");

const router = new express.Router();

const cartRoute = require("../services/cartService/cartRoute");
// const verifyToken = require("../common/verifyToken");

// get complete cart information
router.get("/", cartRoute.getAllCartInformation);

// create new cart for customer
router.post("/", cartRoute.createNewCartInDatabase);

// get cart by cart id
router.get("/:id", cartRoute.getCartByCartId);

// get cart by customer id
router.get("/customer/:id", cartRoute.getCartBySingleCustomerId);

// update cart using cart id
router.put("/:id", cartRoute.updateCartByCartId);

router.put("/customer/:id", cartRoute.updateCartByCustomerId);

// delete single cart by using cart id
router.delete("/:id", cartRoute.deleteCartByCartId);

module.exports = { router };

// getAllCartDetails,
//   createNewCart,
//   getCartById,
//   getCartByCustomerId,
//   updateCartById,
//   deleteCartById,

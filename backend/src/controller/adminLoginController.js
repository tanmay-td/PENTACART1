/**
 * @author : Amol Rathod
 */

const express = require("express");

const router = new express.Router();

const adminLoginRoute = require("../services/adminLoginService/adminLoginRoute");

// insertNewAdminInRecords method is used to create new admin
router.post("/", adminLoginRoute.insertNewAdminInRecords);

router.post("/admin", adminLoginRoute.getAdminByEmail);

module.exports = { router };

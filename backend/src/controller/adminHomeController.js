/**
 * @author : Amol Rathod
 */

const express = require("express");

const router = new express.Router();

const adminHomeRoute = require("../services/adminHomeImagesService/adminImagesRoute");

// insertNewAdminInRecords method is used to create new admin
router.post("/", adminHomeRoute.insertNewImageForAdminPage);

router.get("/", adminHomeRoute.getAllImageForAdminPage);

module.exports = { router };

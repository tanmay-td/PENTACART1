const mongoose = require("mongoose");

const adminHomeImageSchema = new mongoose.Schema({
  adminHomeServiceName: {
    type: String,
    require: true,
    trim : true
  },

  adminHomeImageUrl: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const AdminHomeImagesSchema = new mongoose.model(
  "AdminHomeImages",
  adminHomeImageSchema
);

module.exports = AdminHomeImagesSchema;

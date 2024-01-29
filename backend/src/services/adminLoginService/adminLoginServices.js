const express = require("express");

const AdminLoginSchema = require("../../models/adminLoginSchema");

/**
 *
 * @param {*} email
 * @param {*} password
 * @returns
 */
const insertNewAdmin = async (email, password) => {
  try {
    const insertAdmin = await new AdminLoginSchema({
      email,
      password,
    });

    const adminAlreadyExist = await AdminLoginSchema.findOne({
      email: email,
    });

    if (adminAlreadyExist) {
      return {
        error: `Admin already exists`,
      };
    }
    if (!email || !password) {
      return {
        error: `Please insert all the fields`,
      };
    }

    const resultAfterAdminCreation = await insertAdmin.save();

    console.log(resultAfterAdminCreation);

    return resultAfterAdminCreation;
  } catch (e) {
    console.log(e);
    return {
      error: `Error while inserting new admin.`,
      message: `${e.message}`,
    };
  }
};

const searchAdminByEmail = async (email) => {
  try {
    // if we use findOne() method and element is not found then data is 'null'
    // if we use find() method and element is not found the data is '' or []

    const result = await AdminLoginSchema.findOne({ email: email });

    console.log(result);

    return result;
  } catch (error) {
    return {
      error: `Error while getting admin by email.`,
      message: `${e.message}`,
    };
  }
};

module.exports = {
  insertNewAdmin,
  searchAdminByEmail,
};

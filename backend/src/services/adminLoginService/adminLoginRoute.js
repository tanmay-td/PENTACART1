const express = require("express");
const jwtKey = "pentkart"
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const {
  insertNewAdmin,
  searchAdminByEmail,
} = require("../adminLoginService/adminLoginServices");

/**
 *
 * @param {req} sends request to the server
 * @param {res} gets response from server
 * @returns new admin details
 */
const insertNewAdminInRecords = async (req, res) => {
  let { email, password } = req.body;

  try {
    const result = await insertNewAdmin(email, password);

    console.log(result);

    res.send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getAdminByEmail = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await searchAdminByEmail(email);

    if (data) {
      bcrypt.compare(req.body.password, data.toObject().password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch === false)
          res.send(JSON.stringify("No Admin Found"))
        else {
          jwt.sign({ data }, jwtKey, { expiresIn: "2h" }, (error, token) => {
            if (error) res.send(JSON.stringify("something went wrong"))
            res.status(200).send({ data, token: token });
          })
        }
      })
    } else {
      res.send(JSON.stringify("No Admin Found"))
    }

    console.log(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = {
  insertNewAdminInRecords,
  getAdminByEmail,
};

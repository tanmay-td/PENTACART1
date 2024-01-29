import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const deleteProductById = (_id) => {
  axios
    .delete(`http://localhost:4040/products/${_id}`)
    .then(() => {
      //   loadShowPages();
    })
    .catch(() => {
      window.alert("Error while deleting product");
    });
};

export default deleteProductById;

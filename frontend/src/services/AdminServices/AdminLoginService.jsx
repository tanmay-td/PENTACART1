import axios from "axios";
import React from "react";

export const AdminLoginService = (email, password) => {
  return axios.post("http://localhost:4040/adminlogin/admin/", {
    email,
    password,
  });
};

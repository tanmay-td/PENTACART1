import axios from "axios";

export const CreateCustomerService = async (data) => {
  try {
    console.log("Create customer service file : " + data);
    return await axios.post("http://localhost:4040/customers/", data);
  } catch (error) {
    console.log(error);
  }
};

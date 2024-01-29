import axios from "axios";

export const CustomerService = async (email, password) => {
  try {
    const result = await axios.post(
      "http://localhost:4040/customers/email/customer/",
      {
        customerEmail: email,
        customerPassword: password,
      }
    );

    console.log("Customer Service : ", result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const GetCustomerByEmailService = async (email) => {
  try {
    let result = await axios.get(
      "http://localhost:4040/customers/email/" + email
    );

    console.log("Get customer by email Service : ", result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const CustomerServiceWithPhone = async (phone) => {
  try {
    const result = await axios.get(
      "http://localhost:4040/customers/phone/" + phone
    );

    // console.log("Customer Service  With Phone: ", result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

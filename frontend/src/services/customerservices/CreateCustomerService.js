import axios from 'axios';

export const CreateCustomerService = (data) => {
  return axios.post("http://localhost:4040/customers", data);
};

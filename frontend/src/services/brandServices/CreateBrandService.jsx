import axios from "axios";

export const createBrand = (values) => {
  if (values.brandname === "") {
    window.alert("Please insert brand name");
  } else {
    axios
      .post("http://localhost:4040/productbrands", {
        brandname: values.brandname,
      })
      .then((response) => {
        window.alert(`"${values.brandname}" brand created successfully.`);
      });
  }
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOrderById } from "../Services/OrderService";

function Stripe() {
  const { id } = useParams();
  const notify1 = () => toast.success("Success Payment is completed");
  const notify2 = () =>
    toast.error("Failure payment is not completed and no money is deducted");
  
    const [ProductCost, setorderData] = useState();
    const [ProductName, setProductName] = useState();
    const [ProductDesc, setProductDesc] = useState();
    const getOrderDataByID = async () => {
      const response = await getOrderById(id);
      // setorderData(parseInt(response.data.total_cost));
      setorderData(parseFloat(response.data.total_cost));

      setProductName(response.data.cart_id[0].product_id.product_name);
      setProductDesc(response.data.cart_id[0].product_id.product_desc);
      const value = parseFloat(ProductCost);
      setProducts({name :ProductName , cost :parseFloat(value) , description :ProductDesc })
    };
    useEffect(() => {
      getOrderDataByID();
    }, []);

  const [product, setProducts] = useState();


  async function handleToken(token, address) {
    const response = await axios.post("http://localhost:5000/stripe", {
      token,
      product,
    });

    // take the response
    console.log(response.status); //OK

    if (response.status === 200) {
      notify1();
    } else {
      notify2();
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Stripe Payment Checkout Demo</h1>
        <br></br>
        <h2 className="text-center">Product Information</h2>
        <h2 className="text-center">Product Name:{ProductName}</h2>
        <h2 className="text-center">Product Price:{ProductCost}</h2>
        <h2 className="text-center">
          Product Description:{ProductDesc}
        </h2>
        <br></br>
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51Msj8DSCce5ZBkiwTX3vXUzA2VVphTlwpD4nSvgqEd8ZngXMpxUf4TzCJ6ChqK3eFPcn22OuvXGftK0ZzPc2aXzQ00pp69u2kL"
            token={handleToken}
            amount={ProductCost * 100}
            name={ProductName}
            billingAddress
            shippingAddress
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Stripe;

import "./Order.css";

import axios from "axios";
import moment from "moment/moment";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import { ProductContext } from "../../utils/ProductContext";

// import CartServices from "../service/CartServices";

function Order(props) {
  const { customerDetails } = useContext(ProductContext);
  console.log("Customer Details", customerDetails._id);
  const [product, setProducts] = useState([]);
  const [total, setTotal] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      console.log("customer Id", customerDetails._id);
      axios
        .get("http://localhost:4040/carts/customer/" + customerDetails._id)
        .then((response) => {
          console.log("Data : ", response.data);
          // console.log()
          setProducts(response.data);

          setTotal(0);
        });
    } catch (error) {}
  }, [customerDetails._id, total]);

  const saveOrder = () => {
    // const customerDetails = JSON.parse(localStorage.getItem("userinformation"));

    const myAddress =
      address + " " + city + " " + state + " " + country + " " + zip;

    const dataArray = [];

    // product.map((item) => {
    //   const myData = {
    //     productId: item.products._id.productId,
    //     quantity: item.products.quantity,
    //   };
    //   dataArray.push(myData);
    //   console.log("data array : ", dataArray);
    // });

    const data = {
      total: total,
      customerId: customerDetails._id,
      products: dataArray,
      order_status: "Ordered",
      shipping_address: "yaha",
    };
    console.log("product : ", product);
    axios.post("http://localhost:4040/orders/", data).then((res) => {
      console.log(res.data.customerId);
      if (res.data.customerId === customerDetails._id) {
        console.log("In post order");
        setStatus("Ordered");
        // alert("Orderd successfull");
        // axios.delete(`http://localhost:4500/cart/deletecart/${customerId}`).then((res)=>{})
        // navigate("/orders/" + props.name._id);
      } else {
        alert("Something Went Wrong");
      }
      //     ? (alert("Orderd successfull"),
      //       axios.delete(`http://localhost:4500/cart/deletecart/${customerId}`).then((res)=>{
      //       }),
      //       navigate("/orderlist/"))
      //     : alert("Could not proceed , please try after some time.");
    });
  };

  return (
    <Container fluid>
      <div className="container-fluid">
        <p className="mt-3">
          <Link
            to="/customer/home"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Go to Home page"
            className="text-decoration-none continue-shopping-link "
          >
            <span className=" mx-2">
              <span>
                <i className="fa fa-backward ms-2 me-2" aria-hidden="true"></i>
              </span>
              <span>Continue Shopping</span>
            </span>
          </Link>
        </p>
        <Row className="">
          {/* <div className="col-lg-6 ">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="">Billing Address</span>
          </h5>
          <div className="mb-5 border border-info rounded p-5">
            <div className="row">
              <div className="col-md-6 mb-4 form-group">
                <label>Address Line 1</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-4 form-group">
                <label>Address Line 2</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 mb-4 form-group">
                <label>Country</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select your country</option>
                  <option value="1">India</option>
                  <option value="2">USA</option>
                  <option value="3">Russia</option>
                </select>
              </div>
              <div className="col-md-6 mb-4 form-group">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-4 form-group">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-4 form-group">
                <label>ZIP Code</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123"
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div> */}

          <div className="col-md-12 m-auto align-self-center ">
            <h6 className="mb-3 fst-italic fw-bolder fs-2  customer-heading ">
              {customerDetails.customerFirstName}'s Order Details
            </h6>

            <Container className="parent-container py-2">
              <Scrollbars>
                <>
                  <Row className="cart-items-container m-auto align-self-center justify-content-center  p-2 mt-2 mb-4 mx-2 ">
                    <div className="  p-3">
                      <div className="border-bottom">
                        {product[0] ? (
                          <>
                            {product.map((data, ind) => {
                              return (
                                <div className="fluid float-center m-2">
                                  <table class="table ">
                                    <thead class="thead-dark">
                                      <tr>
                                        <th className="text-center">
                                          Product Image
                                        </th>
                                        <th className="text-center">Product</th>
                                        <th className="text-center">Price</th>
                                        <th>Quantity</th>
                                        <th>Date</th>
                                      </tr>
                                    </thead>
                                    <tbody className="">
                                      {data.products.map((subdata, ind) => {
                                        return (
                                          <tr key={ind}>
                                            <td className="text-center w-25 ">
                                              <img
                                                src={
                                                  subdata.productId
                                                    .productImageUrl
                                                }
                                                alt="product"
                                                className="w-25 text-center m-auto"
                                              />
                                            </td>
                                            <td className="text-center">
                                              {subdata.productId.productName}
                                            </td>

                                            <td className="text-center">
                                              {subdata.productId.productPrice}
                                            </td>
                                            <td className="text-center">
                                              {subdata.quntity}
                                            </td>
                                            <td>
                                              {moment(data.updatedDate)
                                                .utc()
                                                .format("DD/MM/YY")}
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>

                                  <p className="text-center">
                                    <Link
                                      to="https://pmny.in/SIMjocJcNI9E"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Pay now"
                                    >
                                      <button class="btn btn-block btn-outline-success font-weight-bold my-3 rounded-pill">
                                        Pay <span>{data.total}</span>
                                      </button>
                                    </Link>

                                    <Link
                                      to="/cart"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Go to cart"
                                    >
                                      <button class="btn btn-block btn-outline-warning font-weight-bold my-3 ms-3 rounded-pill">
                                        Go to cart
                                      </button>
                                    </Link>
                                  </p>
                                </div>
                              );
                            })}
                          </>
                        ) : (
                          <Button variant="primary" disabled>
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            Loading...
                          </Button>
                        )}
                      </div>
                    </div>
                  </Row>
                </>
              </Scrollbars>
            </Container>
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default Order;

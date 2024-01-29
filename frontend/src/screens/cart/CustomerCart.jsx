import "./CustomerCart.css";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";

import { ProductContext } from "../../utils/ProductContext";
import {
  itemIsDeletedFromCartToastMessage,
  productQuantityDecreasedToastMessage,
  productQuantityIncreasedToastMessage,
} from "../../toastify/AllToastMessages";

const CustomerCart = (props) => {
  const {
    cart,
    customerStatus,
    removeQuantityAndProduct,
    removeProduct,
    addProduct,
    customerDetails,
  } = useContext(ProductContext);

  let total = 0;
  cart.map((val) => (total += val.productStockQuantity * val.productPrice));
  // For storing products
  const [products, setProducts] = useState([]);

  let totalPrice = 0;

  const sendCarttoDatabase = () => {
    const product_array = [];
    console.log(customerDetails._id);
    axios
      .get("http://localhost:4040/carts/customer/" + customerDetails._id)
      .then((res) => {
        if (res.data.length > 0) {
          cart.map((value) => {
            const myobj = {
              productId: value._id,
              quntity: value.productStockQuantity,
            };
            totalPrice += value.productStockQuantity * value.productPrice;
            product_array.push(myobj);
          });

          const myobj = {
            products: product_array,
            total: totalPrice,
            customerId: customerDetails._id,
          };
          // console.log(myobj);
          axios
            .put(
              "http://localhost:4040/carts/customer/" + customerDetails._id,
              myobj
            )
            .then((res) => {
              // navigate("/order/", customerDetails._id);
              console.log(res.data);
              // alert("cart updated");
            });
        } else {
          cart.map((value) => {
            const myobj = {
              productId: value._id,
              quntity: value.productStockQuantity,
            };
            totalPrice += value.productStockQuantity * value.productPrice;
            product_array.push(myobj);
          });
          const myobj = {
            products: product_array,
            total: totalPrice,
            customerId: customerDetails._id,
          };
          console.log(myobj);

          axios.post("http://localhost:4040/carts", myobj).then((res) => {
            console.log(res.data);
            // alert("Cart Added to Database");
          });
        }
      });
  };

  useEffect(() => {
    if (!cart.items) {
      return;
    }

    const keys = JSON.stringify({ ids: Object.keys(cart.items) });

    fetch("http://localhost:4040/products ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });

    // axios
    //   .post(`http://localhost:4040/products/${keys}`)
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((products) => {
    //     setProducts(products);
    //     console.log("Products : ", products);
    //   });
  }, [cart]);

  return (
    <>
      {customerStatus ? (
        <Container fluid>
          <Col className="my-3">
            <Link
              to="/customer/home"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Go to Home page"
              className="text-decoration-none continue-shopping-link "
            >
              <p className="">
                <span className="my-5 mx-2">
                  <span>
                    <i
                      className="fa fa-backward ms-2 me-2"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span className="sub-heading">Continue Shopping</span>
                </span>
              </p>
            </Link>
          </Col>

          <Container className="parent-container py-2">
            <Scrollbars>
              {cart.map((data) => (
                <>
                  <Row className="cart-items-container m-auto align-self-center justify-content-center  p-2 mt-2 mb-4 mx-2 ">
                    <Col md={2} sm={6} className="cart-info  cart-items ">
                      <Link>
                        <img
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View details"
                          src={data.productImageUrl}
                          className="cart-image  m-auto text-center m-5 align-self-center"
                          alt="First"
                        />
                      </Link>
                    </Col>

                    <Col
                      md={3}
                      sm={6}
                      className="cart-title align-self-center m-auto cart-items"
                    >
                      <h5>{data.productName}</h5>
                      <p>{data.categoryId.name}</p>
                    </Col>

                    <Col
                      md={2}
                      sm={6}
                      className="cart-item-inc-dec align-self-center ms-2 cart-items"
                    >
                      <Button
                        onClick={(e) => {
                          removeProduct(data);
                          productQuantityDecreasedToastMessage();
                        }}
                        variant="outline-white"
                      >
                        <i
                          className="text-success fa fa-minus"
                          aria-hidden="true"
                        ></i>
                      </Button>
                      <input
                        className="mx-2 disabled text-center readonly quantity-input-field"
                        id="formControlDisabled"
                        type="text"
                        aria-label="disabled input example"
                        disabled
                        placeholder={data.productStockQuantity}
                      />
                      <Button
                        onClick={(e) => {
                          addProduct(data);
                          productQuantityIncreasedToastMessage();
                        }}
                        variant="outline-white"
                      >
                        <i
                          className="text-success fa fa-plus"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>

                    <Col
                      md={2}
                      sm={6}
                      className="cart-title align-self-center cart-items"
                    >
                      <p className="text-primary fw-bold align-self-center m-auto text-center fst-italic">
                        <span>&#x20B9;</span>{" "}
                        <span>
                          {data.productStockQuantity * data.productPrice}
                        </span>
                      </p>
                    </Col>

                    <Col
                      md={2}
                      sm={6}
                      className="cart-title align-self-center cart-items"
                    >
                      <Button
                        type="submit"
                        variant="outline-info"
                        className="cart-button rounded-pill me-3"
                      >
                        Order
                      </Button>

                      <Button
                        onClick={() => {
                          removeQuantityAndProduct(data);
                          itemIsDeletedFromCartToastMessage();
                        }}
                        type="submit"
                        variant="outline-danger"
                        className="cart-button rounded-pill"
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </>
              ))}
            </Scrollbars>

            <Row>
              <Col className="text-end me-4 mt-3">
                <h4 className="">
                  <span className="main-heading fs-4">Cart Total : </span>
                  <span className="fst-italic sub-heading">{total}</span>
                </h4>

                <Link to={"/order"} onClick={sendCarttoDatabase}>
                  <Button
                    type="submit"
                    variant="outline-success"
                    className="show-detail-button rounded-pill"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Checkout all"
                  >
                    <span className=""> Checkout</span>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      ) : (
        <p>please login</p>
      )}
    </>
  );
};

export default CustomerCart;

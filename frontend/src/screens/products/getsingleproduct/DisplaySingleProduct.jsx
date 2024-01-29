import "./DisplaySingleProduct.css";

import axios from "axios";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { itemAddedToCartToastMessage } from "../../../toastify/AllToastMessages";
import { ProductContext } from "../../../utils/ProductContext";

const DisplaySingleProduct = (props) => {
  const navigate = useNavigate();
  const { cart, setCart, addProduct } = useContext(ProductContext);
  // Using this Admin Status for Route protection
  const { customerStatus } = useContext(ProductContext);

  const [product, setProduct] = useState({
    productImageUrl: "",
    productName: "",
    categoryId: "",
    brandId: "",
    productDescription: "",
    productPrice: "",
    productStockQuantity: "",
    productOffers: "",
  });

  const [productImageUrl, setproductImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productStockQuantity, setproductStockQuantity] = useState("");
  const [productOffers, setproductOffers] = useState("");

  //   const productId = useParams();

  const { id } = useParams();

  const getProductById = () => {
    axios.get(`http://localhost:4040/products/${id}`).then((response) => {
      console.log("Product info : ", response.data);
      // eslint-disable-next-line no-unused-expressions, no-sequences
      setProduct(response.data),
        setproductImageUrl(response.data.productImageUrl),
        setCategoryId(response.data.categoryId.categoryName),
        setBrandId(response.data.brandId.brandName),
        setProductName(response.data.productName),
        setproductDescription(response.data.productDescription),
        setproductPrice(response.data.productPrice),
        setproductStockQuantity(response.data.productStockQuantity),
        setproductOffers(response.data.productOffers);
    });
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <>
      {/* {adminStatus?( */}
      <Container fluid>
        {/* <CustomerNavigation /> */}
        <Row className="mt-3 user-select-none">
          <Col md={4} className="me-5 align-self-center text-center">
            <img
              src={productImageUrl}
              className="single-product-image image-fluid"
              alt="product"
            />
          </Col>

          <Col md={7} className="text-start align-self-center  pt-5 px-5">
            <Col className="mb-4">
              <h3 className="single-product-details-productName">
                {productName}
              </h3>
            </Col>

            <Col className="mb-4 fst-italic">
              <Row>
                <Col md={6}>
                  <p className="single-product-details-productName">
                    Category : {categoryId}
                  </p>
                </Col>

                <Col md={6}>
                  <p className="single-product-details-productName">
                    Brand : {brandId}
                  </p>
                </Col>
              </Row>
            </Col>

            <Col className="mb-4"></Col>

            <Col className="mb-4">
              <p className="fst-italic single-product-details-productDescription ">
                {productDescription}
              </p>
            </Col>

            <Col className="mb-4">
              <p>
                <span className="me-4 text-warning">
                  {" "}
                  <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                  <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                  <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                  <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                  <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                </span>
                <span className="px-3 py-1 bg-info rounded-pill">
                  <i className="fa fa-tag me-2" aria-hidden="true"></i>
                  {productOffers}
                </span>
              </p>
            </Col>

            <Col className=" ">
              <p className="fs-3">
                <sup>&#8377;</sup> <span className="fs-1">{productPrice}</span>
              </p>
            </Col>

            <Col className=" ">
              <Row className="text-center">
                <Col
                  md={3}
                  className="single-product-details-delivery-features  align-self-center text-center"
                >
                  <span className="me-4">
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
                      alt=""
                      className="w-50 h-50 image-fluid"
                    />
                    <p>Free Delivery</p>
                  </span>
                </Col>

                <Col
                  md={3}
                  className="single-product-details-delivery-features  align-self-center align-self-center"
                >
                  <span className="me-4">
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
                      alt=""
                      className="w-50 h-50 image-fluid"
                    />
                    <p>Pay on Delivery</p>
                  </span>
                </Col>

                <Col
                  md={3}
                  className="single-product-details-delivery-features  align-self-center "
                >
                  <span className="me-4">
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                      alt=""
                      className="w-50 h-50 image-fluid"
                    />
                    <p>7 days Replacement</p>
                  </span>
                </Col>

                <Col
                  md={3}
                  className="single-product-details-delivery-features   align-self-center"
                >
                  <span className="me-4">
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                      alt=""
                      className="w-50 h-50 image-fluid"
                    />
                    <p>PentKart Delivered</p>
                  </span>
                </Col>
              </Row>

              {/* <span className="me-4">
              <i
                className="fa fa-money fa-2x  rounded-circle p-2 m-auto single-product-details-delivery-features-icons"
                aria-hidden="true"
              ></i>
              </span>

            <span className="me-4">
            <i
            className="fa fa-cart-arrow-down fa-2x  rounded-circle p-2 m-auto single-product-details-delivery-features-icons"
                aria-hidden="true"
              ></i>
            </span> */}
            </Col>
            {customerStatus ? (
              <Col className="text-start align-self-center">
                <Button
                  variant="outline-warning rounded-pill me-3 mb-2"
                  ata-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Add to cart"
                  onClick={(e) => {
                    console.log("product data : ", product);
                    addProduct(product, itemAddedToCartToastMessage());
                  }}
                >
                  Add to cart
                </Button>

                {/* <Link to="https://pmny.in/1rQQRrPw6JKm">
                  <Button
                    variant="outline-success rounded-pill mx-3 mb-2"
                    ata-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Order"
                  >
                    Order
                  </Button>
                </Link> */}
              </Col>
            ) : (
              ""
            )}
          </Col>

          {/* <Col md={2} className="text-start align-self-center  py-5">
          <p>Product Price</p>
        </Col> */}
        </Row>
      </Container>
      {/* ):(<AdminLogin />)} */}
    </>
  );
};

export default DisplaySingleProduct;

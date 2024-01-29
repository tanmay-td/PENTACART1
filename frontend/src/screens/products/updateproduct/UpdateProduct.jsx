/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Link, useNavigate, useParams } from "react-router-dom";

import ShowAllProducts from "../showallproducts/ShowAllProducts";

function UpdateProduct() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate("/products");
  };
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState([]);
  const [singleproduct, setSingleProduct] = useState([]);

  const [productImageUrl, setproductImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productStockQuantity, setproductStockQuantity] = useState("");
  const [productOffers, setproductOffers] = useState("");

  //   const productId = useParams();

  const { id } = useParams();

  const getProductById = () => {
    axios.get(`http://localhost:4040/products/${id}`).then((response) => {
      setSingleProduct(response.data),
        setproductImageUrl(response.data.productImageUrl),
        setProductName(response.data.productName),
        setproductDescription(response.data.productDescription),
        setproductPrice(response.data.productPrice),
        setproductStockQuantity(response.data.productStockQuantity),
        setproductOffers(response.data.productOffers);
    });
  };

  const updateProduct = () => {
    const data = singleproduct;

    if (productName) {
      data.productName = productName;
    }
    if (productDescription) {
      data.productDescription = productDescription;
    }
    if (productPrice) {
      data.productPrice = productPrice;
    }
    if (productStockQuantity) {
      data.productStockQuantity = productStockQuantity;
    }
    if (productImageUrl) {
      data.productImageUrl = productImageUrl;
    }
    if (productOffers) {
      data.productOffers = productOffers;
    }

    axios
      .put(`http://localhost:4040/products/${id}`, data)
      .then((response) => console.log(response.data));
  };

  useEffect(() => {
    getProductById();
    updateProduct();
  }, []);
  // get current products

  return (
    <div>
      <ShowAllProducts />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="">
              <Form.Group
                as={Col}
                md="6"
                className="mb-4 "
                controlId="validationCustom01"
              >
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product name"
                  name="productName"
                  className="rounded-pill"
                  defaultValue={singleproduct.productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  className="rounded-pill"
                  name="productDescription"
                  placeholder="Product Description"
                  defaultValue={singleproduct.productDescription}
                  onChange={(e) => setproductDescription(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Product Price"
                  name="productPrice"
                  className="rounded-pill"
                  defaultValue={singleproduct.productPrice}
                  onChange={(e) => setproductPrice(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Products in stock</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Products in stock"
                  name="productStockQuantity"
                  className="rounded-pill"
                  defaultValue={singleproduct.productStockQuantity}
                  onChange={(e) => setproductStockQuantity(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Product Offers</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product Offers"
                  name="productOffers"
                  className="rounded-pill"
                  defaultValue={singleproduct.productOffers}
                  onChange={(e) => setproductOffers(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Product Image Url</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product Image Url"
                  name="productImageUrl"
                  defaultValue={singleproduct.productImageUrl}
                  onChange={(e) => setproductImageUrl(e.target.value)}
                  className="rounded-pill"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="text-center create-button my-3">
                <Link to="/products">
                  <Button
                    type="submit"
                    variant="outline-info"
                    className="rounded-pill"
                    onClick={updateProduct}
                  >
                    Update Product
                  </Button>
                </Link>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateProduct;

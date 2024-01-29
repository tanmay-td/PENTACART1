import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import {
  allFieldErrorToastMessage,
  productInsertedToastMessage,
} from "../../../toastify/AllToastMessages";
import { BASE_URL } from "../../../utils/BaseUrl";
import ShowAllProducts from "../showallproducts/ShowAllProducts";

export default function CreateProduct() {
  const token = Cookies.get("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productOffers, setProductOffers] = useState("");
  const [productStockQuantity, setProductStockQuantity] = useState("");
  let [brandId, setBrandId] = useState("");
  let [categoryId, setCategoryId] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");

  let [category, setCategory] = useState([]);
  let [brand, setBrand] = useState([]);

  const handleClose = () => {
    setShow(false);
    navigate("/products");
  };
  const handleShow = () => setShow(true);

  const loadBrandPages = () => {
    axios
      .get("http://localhost:4040/productbrands")
      .then((response) => setBrand(response.data));
  };

  const loadShowPages = () => {
    axios
      .get("http://localhost:4040/productcategories")
      .then((response) => setCategory(response.data));
  };

  function createProduct() {
    if (
      productName === "" ||
      productDescription === "" ||
      productPrice === "" ||
      productStockQuantity === "" ||
      productOffers === "" ||
      categoryId === "" ||
      brandId === "" ||
      productImageUrl === ""
    ) {
      allFieldErrorToastMessage();
      // window.alert("Please insert all fields");
    } else {
      axios
        .post(BASE_URL + "products/", {
          productName,
          productDescription,
          productPrice,
          productStockQuantity,
          productOffers,
          categoryId,
          brandId,
          productImageUrl,
        })
        .then(
          (response) => productInsertedToastMessage(),
          // window.alert(`Product with name "${productName}" is inserted`),
          navigate("/products")
        )
        .catch((e) => {
          window.alert(`Error occured while inserting product`);
        });
    }
  }

  useEffect(() => {
    loadBrandPages();
    loadShowPages();
  }, []);

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <ShowAllProducts />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
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
                  // value={product.productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="rounded-pill"
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
                  // value={product.productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
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
                  type="text"
                  placeholder="Product Price"
                  name="productPrice"
                  // value={product.productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="rounded-pill"
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
                  type="text"
                  placeholder="Products in stock"
                  name="productStockQuantity"
                  // value={product.productStockQuantity}
                  onChange={(e) => setProductStockQuantity(e.target.value)}
                  className="rounded-pill"
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
                  // value={product.productOffers}
                  onChange={(e) => setProductOffers(e.target.value)}
                  className="rounded-pill"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Category Id</Form.Label>
                {/* <Form.Control
                  required
                  type="text"
                  placeholder="Product Category"
                  name="categoryId"
                  value={product.categoryId}
                  onChange={productInsertion}
                  className="rounded-pill"
                /> */}

                {category[0] ? (
                  <div
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="rounded-pill"
                  >
                    <select
                      onChange={(e) => (categoryId = e.target.value)}
                      id="my-select"
                      className="form-control rounded-pill"
                    >
                      <option disabled selected>
                        Select category
                      </option>

                      {category.map((obj) => (
                        <option className="rounded-pill" value={obj._id}>
                          {obj.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  ""
                )}

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* Brands */}
              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Brand Id</Form.Label>
                {brand[0] ? (
                  <div
                    onChange={(e) => setBrandId(e.target.value)}
                    className="rounded-pill"
                  >
                    <select
                      onChange={(e) => (brandId = e.target.value)}
                      id="my-select"
                      className="form-control rounded-pill"
                    >
                      <option disabled selected>
                        Select brand
                      </option>

                      {brand.map((obj) => (
                        <option className="rounded-pill" value={obj._id}>
                          {obj.brandName}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  ""
                )}
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
                  // value={product.productImageUrl}
                  onChange={(e) => setProductImageUrl(e.target.value)}
                  className="rounded-pill"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="text-center create-button my-3">
                <Link to="/products">
                  <Button
                    onClick={createProduct}
                    type="submit"
                    variant="outline-info"
                    className="rounded-pill"
                  >
                    Create Product
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

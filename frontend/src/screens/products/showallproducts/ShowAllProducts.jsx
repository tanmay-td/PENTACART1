import "./ShowAllProducts.css";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

import { productDeletionToastMessage } from "../../../toastify/AllToastMessages";

// import Toast from "react-bootstrap/Toast";
// import Modal1 from "../../components/Modal1";

// import createProductInDatabase from "../createproduct/CreateProduct";

function ShowAllProducts() {
  const token = Cookies.get("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  // console.log("token = ", token);

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setproductPerPage] = useState(4);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = myData.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(myData.length / postPerPage); i++) {
    pages.push(i);
  }

  // Load page after delete
  const loadShowPages = () => {
    axios
      .get("http://localhost:4040/products/")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadShowPages();
  }, []);

  // Delete product by id :
  const deleteProductById = (_id) => {
    axios
      .delete(`http://localhost:4040/products/${_id}`)
      .then(() => {
        productDeletionToastMessage();
        loadShowPages();
      })
      .catch(() => {
        window.alert("Error while deleting product");
      });
  };
  // get current products

  return (
    <Container fluid className="main-container">
      <Row className="my-3 mx-2 align-items-center">
        <Col xsm={6} xxsm={12} className="text-start m-auto">
          <h2 className="main-heading fs-2">All Products</h2>
        </Col>

        <Col xsm={6} xxsm={12} className="text-end m-auto">
          <Link
            variant="outline-success"
            className=" rounded-pill btn btn-outline-success"
            to="/products/create"
          >
            <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
            <span className="ms-1">Create Product</span>
          </Link>
        </Col>
      </Row>

      <Row className="mx-2">
        <Col>
          <Table
            responsive
            bordered
            className="mb-5 text-xsm-center text-md-start m-auto"
          >
            <thead className="text-center ">
              <tr>
                {/* <th>Sr No</th> */}
                <th className="align-self-center justify-items-center">
                  Product Image
                </th>
                <th className="align-self-center justify-items-center">
                  Product Name
                </th>
                <th className="align-self-center justify-items-center">
                  Product Description
                </th>
                <th className="align-self-center justify-items-center">
                  Product Price
                </th>
                <th className="align-self-center justify-items-center">
                  Product in stock
                </th>
                <th className="align-self-center justify-items-center">
                  Product Offers
                </th>
                <th className="align-self-center justify-items-center">
                  Category Name
                </th>
                <th className="align-self-center justify-items-center">
                  Brand Name
                </th>
                <th className="align-self-center justify-items-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {currentPost.map((post, ind) => {
                return (
                  <tr key={ind}>
                    {/* <td>{ind + 1}</td> */}
                    <td className="">
                      <img
                        className="productImage m-3 text-center"
                        src={post.productImageUrl}
                        alt="product"
                      />
                    </td>
                    <td>{post.productName}</td>
                    <td>{post.productDescription}</td>
                    <td>{post.productPrice}</td>
                    <td>{post.productStockQuantity}</td>
                    <td>{post.productOffers}</td>
                    <td>{post.categoryId.categoryName}</td>
                    <td>{post.brandId.brandName}</td>
                    <td className="">
                      <Col>
                        <Link
                          className="text-decoration-none text-center"
                          to={"/products/update/" + post._id}
                        >
                          <i
                            class="fa fa-edit text-success"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </Col>

                      <Col>
                        <Link
                          className="text-decoration-none text-center"
                          to={"/products/" + post._id}
                        >
                          <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </Link>
                      </Col>

                      <Col>
                        <Link
                          className="text-decoration-none text-center"
                          onClick={() => {
                            const confirmBox = window.confirm(
                              `Do you really want to delete "${post.productName}" ?`
                            );

                            if (confirmBox === true) {
                              deleteProductById(post._id);
                            }
                          }}
                        >
                          <i
                            class="fa fa-trash text-danger"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </Col>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mb-3 mx-2 align-items-center">
        <Col className="text-start">
          <Link to="/admin/home">
            <Button
              type="submit"
              variant="outline-dark"
              className="mb-3 px-4 rounded-pill"
            >
              <i class="fa fa-backward" aria-hidden="true"></i>
              <span className="ms-2">Back</span>
            </Button>
          </Link>

          <Col className="pagination-button text-center">
            {pages.map((page, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={page === currentPage ? "activePage" : ""}
                >
                  {page}
                </Button>
              );
            })}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowAllProducts;

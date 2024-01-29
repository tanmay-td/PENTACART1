import axios from "axios";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import AdminLogin from "../../../admin/adminlogin/AdminLogin";
import { ProductContext } from "../../../utils/ProductContext";
import { customerDeletedSuccessToastMessage } from "../../../toastify/AllToastMessages";
import { BASE_URL } from "../../../utils/BaseUrl";

const ShowAllCustomers = () => {
  const [customers, setCustomer] = useState([]);
  const [isError, setIsError] = useState("");

  // Using this Admin Status for Route protection
  const { adminStatus } = useContext(ProductContext);

  // Pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setproductPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = customers.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(customers.length / postPerPage); i++) {
    pages.push(i);
  }

  const loadShowAllCustomersPages = () => {
    axios
      .get(`${BASE_URL}customers/`)
      .then((response) => setCustomer(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadShowAllCustomersPages();
  }, []);

  // Delete product by id :
  const deleteProductById = (_id) => {
    axios
      .delete(`${BASE_URL}customers/${_id}`)
      .then(() => {
        loadShowAllCustomersPages();
      })
      .catch(() => {
        window.alert("Error while deleting product");
      });
  };

  return (
    <>
      {adminStatus ? (
        <Container fluid className="main-container">
          <Row className="my-3 mx-2 align-items-center">
            <Col xsm={6} xxsm={12} className="text-start m-auto">
              <h2 className="main-heading fs-2">All customers</h2>
            </Col>
          </Row>

          <Row className="mx-2">
            <Col>
              <Table
                responsive
                striped
                bordered
                hover
                className="mb-5 text-xsm-center text-md-start m-auto"
              >
                <thead className="text-center">
                  <tr>
                    {/* <th>Sr No</th> */}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentPost.map((post, ind) => {
                    return (
                      <tr key={ind}>
                        {/* <td>{ind + 1}</td> */}
                        <td>{post.customerFirstName}</td>
                        <td>{post.customerLastName}</td>
                        <td>{post.customerPhone}</td>
                        <td>{post.customerAddress}</td>
                        <td>{post.customerEmail}</td>

                        <td className="">
                          {/* <Link
                        className="text-decoration-none"
                        to={"/customers/" + post._id}
                      >
                        <i
                          class="fa fa-edit text-success"
                          aria-hidden="true"
                        ></i>
                      </Link> */}

                          <Link
                            className="text-decoration-none"
                            onClick={() => {
                              const confirmBox = window.confirm(
                                `Do you really want to delete "${post.customerFirstName} ${post.customerLastName}" ?`
                              );

                              if (confirmBox === true) {
                                deleteProductById(post._id);
                                customerDeletedSuccessToastMessage(
                                  `${post.customerFirstName} ${post.customerLastName}`
                                );
                              }
                            }}
                          >
                            <i
                              class="fa fa-trash text-danger ms-3"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>

          <Row className="mx-2 align-items-center">
            <Col className="text-start">
              <Link to="/admin/home">
                <Button
                  type="submit"
                  variant="outline-dark"
                  className="mb-5 px-4 rounded-pill"
                >
                  <i class="fa fa-backward" aria-hidden="true"></i>
                  <span className="ms-2">Back</span>
                </Button>
              </Link>
            </Col>
          </Row>

          {/* Pagination */}
          <Row className="mb-5 mx-2 align-items-center">
            <Col className="pagination-button text-center">
              {pages.map((page, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => setcurrentPage(page)}
                    className={page === currentPage ? "activePage" : ""}
                  >
                    {page}
                  </Button>
                );
              })}
            </Col>
          </Row>
        </Container>
      ) : (
        <AdminLogin />
      )}
    </>
  );
};

export default ShowAllCustomers;

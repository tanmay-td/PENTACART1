import "./ShowAllBrands.css";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import AdminLogin from "../../../admin/adminlogin/AdminLogin";
import { ProductContext } from "../../../utils/ProductContext";

import { brandDeletedToastMessage } from "../../../toastify/AllToastMessages";
import { BASE_URL } from "../../../utils/BaseUrl";

const ShowAllProductBrands = () => {
  const [brands, setbrands] = useState([]);
  const [isError, setIsError] = useState("");

  const navigate = useNavigate();

  // Using this Admin Status for Route protection
  const { adminStatus } = useContext(ProductContext);

  // Pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setproductPerPage] = useState(4);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = brands.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(brands.length / postPerPage); i++) {
    pages.push(i);
  }

  // Load page after delete
  const loadShowPages = () => {
    axios
      .get("http://localhost:4040/productbrands/")
      .then((response) => setbrands(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadShowPages();
  }, []);

  const [product, setProduct] = useState({
    brandName: "",
    brandImageUrl: "",
  });

  // Delete product by id :
  const deleteProductById = (_id) => {
    axios
      .delete(`${BASE_URL}productbrands/${_id}`)
      .then(() => {
        brandDeletedToastMessage();
        loadShowPages();
      })
      .catch(() => {
        window.alert("Error while deleting product brands");
      });
  };

  return (
    <>
      {adminStatus ? (
        <Container fluid className="main-container">
          <Row className="mt-3 mx-2 align-items-center">
            <Col xsm={6} xxsm={12} className="text-start m-auto">
              <h2 className="main-heading fs-2">All Brands</h2>
            </Col>

            <Col xsm={6} xxsm={12} className="text-end m-auto">
              <Link to="/brands/add">
                <Button
                  type="submit"
                  variant="outline-success"
                  className=" rounded-pill"
                >
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
                  <span className="ms-1">Create Product Brands</span>
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className="mx-2 justify-content-center">
            <Col md={6} className="">
              <Table
                responsive
                striped
                bordered
                hover
                className="mb-5 text-xsm-center text-md-start m-auto"
              >
                <thead className=" text-center m-auto">
                  <tr>
                    {/* <th className="py-2">Sr No</th> */}
                    <th className="py-2">Brand Image</th>
                    <th className="py-2">Brand Name</th>

                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="align-self-center text-center m-auto py-4">
                  {currentPost.map((data, index) => {
                    return (
                      <tr key={index} className=" text-center m-auto">
                        {/* <td className="py-4">{index + 1}</td> */}
                        <td className="">
                          <img
                            src={data.brandImageUrl}
                            alt="category"
                            className="image-fluid brand-image text-center"

                            // onClick={(e) => setElectronics(true)}
                          />
                        </td>
                        <td className="py-4">{data.brandName}</td>

                        <td className="py-4">
                          {/* <Link className="text-decoration-none">
                        <i
                          class="fa fa-edit text-success"
                          aria-hidden="true"
                        ></i>
                      </Link> */}

                          <Link
                            className="text-decoration-none"
                            onClick={() => {
                              const confirmBox = window.confirm(
                                `Do you really want to delete ${data.brandName} ?`
                              );

                              if (confirmBox === true) {
                                deleteProductById(data._id);
                                loadShowPages();
                              }
                            }}
                          >
                            <i
                              class="fa fa-trash text-danger ms-4"
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
                  className="px-4 rounded-pill"
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

export default ShowAllProductBrands;

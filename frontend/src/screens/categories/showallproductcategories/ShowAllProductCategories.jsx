import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AdminLogin from "../../../admin/adminlogin/AdminLogin";
import { ProductContext } from "../../../utils/ProductContext";

import deleteProductById from "../../../services/productservices/ProductService";
import { categoryDeletedToastMessage } from "../../../toastify/AllToastMessages";
import { BASE_URL } from "../../../utils/BaseUrl";

const ShowAllProductCategories = () => {
  const [category, setcategory] = useState([]);
  const [isError, setIsError] = useState("");

  // Using this Admin Status for Route protection
  const { adminStatus } = useContext(ProductContext);

  // Pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setproductPerPage] = useState(4);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = category.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(category.length / postPerPage); i++) {
    pages.push(i);
  }

  const navigate = useNavigate();

  // Load page after delete
  const loadShowPages = () => {
    axios
      .get(BASE_URL + "productcategories/")
      .then((response) => setcategory(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadShowPages();
  }, []);

  const [product, setProduct] = useState({
    name: "",
  });

  // Delete product by id :
  const deleteProductById = (_id) => {
    axios
      .delete(`${BASE_URL}productcategories/${_id}`)
      .then(() => {
        categoryDeletedToastMessage();
        loadShowPages();
      })
      .catch(() => {
        window.alert("Error while deleting product categories");
      });
  };

  return (
    <>
      {adminStatus ? (
        <Container fluid className="main-container">
          <Row className="my-3 mx-2 align-items-center">
            <Col xsm={6} xxsm={12} className="text-start m-auto">
              <h2 className="main-heading fs-2">All Categories</h2>
            </Col>

            <Col xsm={6} xxsm={12} className="text-end m-auto">
              <Link to="/categories/add">
                <Button
                  type="submit"
                  variant="outline-success"
                  className=" rounded-pill"
                >
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
                  <span className="ms-1">Create Product Categories</span>
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
                    <th className="py-2">Category Image</th>
                    <th className="py-2">Category Name</th>

                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="align-self-center text-center m-auto py-4">
                  {currentPost.map((data, index) => {
                    return (
                      <tr key={index} className=" text-center m-auto">
                        {/* <td className="py-4">{index + 1}</td> */}
                        <td className="w-50">
                          <img
                            src={data.categoryImageUrl}
                            alt="category"
                            className="image-fluid text-center w-25 m-auto py-2"

                            // onClick={(e) => setElectronics(true)}
                          />
                        </td>
                        <td className="py-4">{data.categoryName}</td>

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
                                `Do you really want to delete ${data.categoryName} ?`
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
          <Row className="mb-2 mx-2 align-items-center">
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

export default ShowAllProductCategories;

import "./HomeNavigation.css";

import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import {
  adminLoggedOutToastMessage,
  customerLoggedOutToastMessage,
  searchEmptyToastMessage,
} from "../../toastify/AllToastMessages";
import { ProductContext } from "../../utils/ProductContext";
import Tooltip from "@mui/material/Tooltip";

const HomeNavigation = () => {
  const navigate = useNavigate();

  const [searchField, setSearchField] = useState("");
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const {
    cart,
    customerStatus,
    customerDetails,
    customerStatusSetter,
    setCustomerDetailsFunction,
    setAdminStatus,
    setAdminDetailsFunction,
    adminStatus,
    adminDetails,
    adminStatusSetter,
  } = useContext(ProductContext);

  const customerLogout = () => {
    customerLoggedOutToastMessage(
      `${customerDetails.customerFirstName} ${customerDetails.customerLastName}`
    );
    customerStatusSetter(false);
    setCustomerDetailsFunction(false);
    navigate("/");
  };

  // Admin logout
  const adminLogout = () => {
    adminLoggedOutToastMessage();
    adminStatusSetter(false);
    setAdminDetailsFunction(false);
    navigate("/");
  };

  // Search

  const loadAllProducts = () => {
    axios
      .get("http://localhost:4040/products/")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  };

  const redirectoToSerach = () => {
    if (searchField === "") {
      searchEmptyToastMessage();
      navigate("/customer/home");
    } else {
      navigate("/search/" + searchField, { state: searchField });
    }
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Navbar
          bg=""
          expand="lg"
          className="border  px-3 nav-background-color navigation-main-container"
        >
          <Navbar.Brand>
            {customerStatus ? (
              <Tooltip title="Go to Welcome page" arrow>
                <Link
                  to="/"
                  className="text-decoration-none pentkart-heading text-center"
                  // onClick={customerLogout}
                >
                  <img
                    src="https://img.freepik.com/free-vector/pentagon-abstract-logo_1438-349.jpg?size=338&ext=jpg"
                    className="pentagon-logo"
                    alt="React Bootstrap logo"
                  />{" "}
                  <span id="pentkart-logo-name">PentKART</span>
                </Link>
              </Tooltip>
            ) : adminStatus ? (
              <Tooltip title="Go to Welcome page" arrow>
                <Link
                  to="/"
                  className="text-decoration-none pentkart-heading text-center"
                  onClick={adminLogout}
                >
                  <img
                    src="https://img.freepik.com/free-vector/pentagon-abstract-logo_1438-349.jpg?size=338&ext=jpg"
                    className="pentagon-logo"
                    alt="React Bootstrap logo"
                  />{" "}
                  <span id="pentkart-logo-name">PentKART</span>
                </Link>
              </Tooltip>
            ) : (
              <Link
                to="/"
                className="text-decoration-none pentkart-heading text-center"
              >
                <img
                  src="https://img.freepik.com/free-vector/pentagon-abstract-logo_1438-349.jpg?size=338&ext=jpg"
                  className="pentagon-logo"
                  alt="React Bootstrap logo"
                />{" "}
                <span id="pentkart-logo-name">PentKART</span>
              </Link>
            )}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {customerStatus ? (
                <Nav.Link className=" mx-4">
                  <Link to="/customer/home" className=" text-decoration-none">
                    <li className="navigation-bar-items">Home</li>
                  </Link>
                </Nav.Link>
              ) : adminStatus ? (
                <Nav.Link className=" mx-4">
                  <Link to="/admin/home" className=" text-decoration-none">
                    <li className="navigation-bar-items">Home</li>
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link className=" mx-4">
                  <Link to="/" className=" text-decoration-none">
                    <li className="navigation-bar-items">Home</li>
                  </Link>
                </Nav.Link>
              )}

              {adminStatus ? (
                <NavDropdown
                  title="Products"
                  className="mx-4 "
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="rounded-pill accounts-link-items">
                    <Link
                      to="/products"
                      className="text-decoration-none accounts-link"
                    >
                      <li>
                        <span className="navigation-bar-items ms-2 accounts-link-list-item">
                          All Product
                        </span>
                      </li>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className="rounded-pill accounts-link-items">
                    <Link
                      to="/categories"
                      className="text-decoration-none accounts-link"
                    >
                      <li>
                        <span className="navigation-bar-items ms-2 accounts-link-list-item">
                          All Categories
                        </span>
                      </li>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className="rounded-pill accounts-link-items">
                    <Link
                      to="/brands"
                      className="text-decoration-none accounts-link"
                    >
                      <li>
                        <span className="navigation-bar-items ms-2 accounts-link-list-item">
                          All Brands
                        </span>
                      </li>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className="rounded-pill accounts-link-items">
                    <Link
                      to="/customers"
                      className="text-decoration-none accounts-link"
                    >
                      <li>
                        <span className=" navigation-bar-items ms-2 accounts-link-list-item">
                          All Customers
                        </span>
                      </li>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null}

              {adminStatus ? null : (
                <>
                  <Nav.Link className=" mx-4">
                    <Link to="/developers" className=" text-decoration-none">
                      <li className="navigation-bar-items">About Us</li>
                    </Link>
                  </Nav.Link>

                  <Nav.Link className=" mx-4 ">
                    <Link to="" className=" text-decoration-none">
                      <li className="navigation-bar-items">Contact Us</li>
                    </Link>
                  </Nav.Link>
                </>
              )}

              {customerStatus || adminStatus ? null : (
                <NavDropdown
                  title="Accounts"
                  className="mx-4 "
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="rounded-pill accounts-link-items">
                    <Link
                      to="/admin"
                      className="text-decoration-none accounts-link"
                    >
                      <li>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <span className="ms-2 accounts-link-list-item">
                          Admin
                        </span>
                      </li>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className="rounded-pill accounts-link-items">
                    <Link
                      to="/customers/signin"
                      className="text-decoration-none accounts-link"
                    >
                      <li>
                        <i class="fa fa-user-md" aria-hidden="true"></i>
                        <span className="ms-2 accounts-link-list-item">
                          Customer
                        </span>
                      </li>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {/* Search Bar */}
              {customerStatus ? (
                <div className="search-input">
                  <Form className="d-flex ms-5 ">
                    <Form.Control
                      type="search"
                      placeholder="Search for products"
                      className="mx-1 "
                      aria-label="Search"
                      onChange={(e) => {
                        setSearchField(e.target.value);
                      }}
                    />
                    <Button
                      variant="light"
                      className="submit-button"
                      onClick={redirectoToSerach}
                    >
                      <i
                        className="sub-heading fa fa-search "
                        aria-hidden="true"
                      ></i>
                    </Button>
                  </Form>
                </div>
              ) : null}
            </Nav>

            {/* Customer and admin profile  profile dropdown */}
            {customerStatus ? (
              <>
                <Link to="/cart">
                  <Tooltip title="Go to cart" arrow>
                    <Button variant="light" className="cart-icon me-4">
                      <i
                        className="sub-heading fa fa-cart-plus"
                        aria-hidden="true"
                      ></i>
                      <sup className="sub-heading fw-bolder ps-1">
                        {cart.length}
                      </sup>
                    </Button>
                  </Tooltip>
                </Link>

                <Link className="account-link">
                  <DropdownButton
                    variant="light"
                    align="end"
                    title={
                      <i
                        className="sub-heading fa fa-user text-dark"
                        aria-hidden="true"
                      >
                        <span className="ps-2 sub-heading">
                          {customerDetails.customerFirstName}
                        </span>
                      </i>
                    }
                    id="dropdown-menu-align-end text-light fs-3"
                    className=""
                  >
                    <Dropdown.Item className=" rounded-pill mb-2" eventKey="1">
                      <Link
                        to="/customers/profile"
                        className="text-decoration-none navigation-bar-items"
                      >
                        Profile
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item className=" rounded-pill mb-2" eventKey="2">
                      <Link
                        to=""
                        className="text-decoration-none navigation-bar-items"
                      >
                        Order
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item
                      // onClick={(e) => customerStatusSetter(false)}
                      className="text-danger rounded-pill mb-2"
                      eventKey="4"
                      onClick={customerLogout}
                    >
                      Logout
                    </Dropdown.Item>
                  </DropdownButton>
                </Link>
              </>
            ) : adminStatus ? (
              <Link className="account-link">
                <DropdownButton
                  variant="light"
                  align="end"
                  title={
                    <i
                      className="sub-heading fa fa-user text-dark"
                      aria-hidden="true"
                    >
                      <span className="ps-2 sub-heading">
                        {adminDetails.email.slice(0, -10)}
                      </span>
                    </i>
                  }
                  id="dropdown-menu-align-end text-light fs-3"
                  className=""
                >
                  <Dropdown.Item className=" rounded-pill mb-2" eventKey="1">
                    <Link
                      to="/admin/profile"
                      className="navigation-bar-items text-decoration-none text-dark"
                    >
                      Profile
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item
                    // onClick={(e) => customerStatusSetter(false)}
                    className="text-danger rounded-pill mb-2"
                    eventKey="4"
                    onClick={adminLogout}
                  >
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
              </Link>
            ) : null}
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};

export default HomeNavigation;

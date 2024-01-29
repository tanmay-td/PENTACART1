import "./AdminHomePage.css";

import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import admin_homepage1 from "../../images/admin_homepage/admin_homepage_1.jpg";
import admin_homepage3 from "../../images/admin_homepage/admin_homepage_3.png";
import admin_homepage5 from "../../images/admin_homepage/admin_homepage_5.jpg";
import admin_homepage6 from "../../images/admin_homepage/admin_homepage_6.jpg";
import { ProductContext } from "../../utils/ProductContext";
import AdminLogin from "../adminlogin/AdminLogin";
const AdminHomePage = () => {
  const { setAdminStatus, adminStatus, adminStatusSetter } =
    useContext(ProductContext);
  return (
    <>
      {adminStatus ? (
        <Container fluid className="">
          {/* <AdminNavigation /> */}

          <Container
            fluid
            className=" my-4 justify-content-center justify align-items-center  m-auto d-flex"
          >
            <Row className="mb-3 justify-content-center justify align-items-center  m-auto">
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-2 align-self-center text-center"
              >
                <Link to="/products" className="text-decoration-none">
                  <Card
                    className="admin-homepage-card"
                    style={{ width: "17rem", height: "17rem" }}
                  >
                    <Card.Header className="first-heading fs-5">
                      Products
                    </Card.Header>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={admin_homepage6}
                        alt="products"
                        className="h-50  px-4 my-3 admin-homepage-card-image"
                      />

                      <Button
                        className="show-details-button"
                        variant="rounded-pill"
                        data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="View Products Details"
                      >
                        Show Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-2 align-self-center text-center"
              >
                <Link to="/categories" className="text-decoration-none">
                  <Card
                    className="admin-homepage-card"
                    style={{ width: "17rem", height: "17rem" }}
                  >
                    <Card.Header className="first-heading fs-5">
                      Product Categories
                    </Card.Header>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={admin_homepage1}
                        alt="product category"
                        className="h-50  px-4 my-3 admin-homepage-card-image"
                      />

                      <Button
                        className="show-details-button bg-info"
                        variant="rounded-pill"
                        data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="View Categories Details"

                      >
                        Show Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-2 align-self-center text-center"
              >
                <Link to="/brands" className="text-decoration-none">
                  <Card
                    className="admin-homepage-card"
                    style={{ width: "17rem", height: "17rem" }}
                  >
                    <Card.Header className="first-heading fs-5">
                      Product Brands
                    </Card.Header>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={admin_homepage3}
                        alt="product brand"
                        className="h-50  px-4 my-3 admin-homepage-card-image"
                      />

                      <Button
                        className="show-details-button"
                        variant="rounded-pill"
                        data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="View Brands Details"
                      >
                        Show Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-2 align-self-center text-center"
              >
                <Link to="/customers" className="text-decoration-none">
                  <Card
                    className="admin-homepage-card"
                    style={{ width: "17rem", height: "17rem" }}
                  >
                    <Card.Header className="first-heading fs-5">
                      Customers
                    </Card.Header>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={admin_homepage5}
                        alt="customers"
                        className="h-50  px-4 my-3 admin-homepage-card-image"
                      />

                      <Button
                        className="show-details-button"
                        variant="rounded-pill"
                        data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="View Customers Details"
                      >
                        Show Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      ) : (
        <AdminLogin />
      )}
    </>
  );
};

export default AdminHomePage;

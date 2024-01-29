import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import BrandCards from "../cards/brandscad/BrandCards";
import CategoriesCard from "../cards/categorycards/CategoriesCard";
import AllProductsCard from "../cards/allproductscard/AllProductsCard";
import { ProductContext } from "../../utils/ProductContext";
import { useCol } from "react-bootstrap/esm/Col";
import CustomerHomeCarousel from "../carousel/CustomerHomeCarousel";
import SubFooter from "../footer/SubFooter";

const CustomerHomePage = () => {
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
  return (
    <Container fluid>
      <Row>
        <Col className="categorycard-row align-self-center my-2">
          <CustomerHomeCarousel />
        </Col>
      </Row>

      {/* All Products */}
      <Row>
        <Col className="categorycard-row align-self-center my-2">
          <h1 className="first-heading py-3 text-center category-card-section-heading">
            All Products
          </h1>
          <AllProductsCard />
        </Col>
      </Row>

      {/* Top Brands */}
      <Row>
        <Col className="categorycard-row align-self-center my-2">
          <h1 className="first-heading py-3 text-center category-card-section-heading">
            Top Brands
          </h1>
          <BrandCards />
        </Col>
      </Row>

      {/* Top Categories */}
      <Row>
        <Col className="categorycard-row align-self-center my-2">
          <h1 className="first-heading py-3 text-center category-card-section-heading">
            Top Categories
          </h1>
          <CategoriesCard />
        </Col>
      </Row>

      {/* Why to choose pentKART */}
      {/* <Row className="categorycard-row ">
        <Col className="align-self-center my-2 py-3 mx-4 m-auto customer-homepage-main-container">
          <Accordion
            defaultActiveKey="0"
            className="rounded w-75 m-auto customer-homepage-main-container"
          >
            <Accordion.Item
              eventKey="0"
              className="customer-homepage-main-container"
            >
              <Accordion.Header className="customer-homepage-main-container">
                What we offer ?{" "}
              </Accordion.Header>
              <Accordion.Body className="customer-homepage-main-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row> */}

      <SubFooter />
    </Container>
  );
};

export default CustomerHomePage;

import "./HomePage.css";

import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import AboutUs from "../aboutus/AboutUs";
import BrandCards from "../cards/brandscad/BrandCards";
import CategoriesCard from "../cards/categorycards/CategoriesCard";
import WelcomeCarousel from "../carousel/WelcomeCarousel";
import MainFooter from "../footer/MainFooter";
import SubFooter from "../footer/SubFooter";

const HomePage = () => {
  return (
    <Container fluid>
      {/* Carousel */}
      <Row>
        <WelcomeCarousel />
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

      {/* About Us Section */}
      <Row>
        <Col id="about" className="categorycard-row my-2 align-self-center">
          <AboutUs />
        </Col>
      </Row>

      {/* Footer */}
      <Row>
        <Col className="categorycard-row my-2 align-self-center">
          <MainFooter />
          <SubFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

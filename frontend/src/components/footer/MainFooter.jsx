import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    // <div>
    //   <p className="copyright-text">
    //     © 1990 - 2023 Harbinger Group. All Rights Reserved.
    //   </p>
    // </div>

    <Container fluid className=" footer " id="contact-us-section">
      <Row className="justify-content-center m-auto pb-3  py-4">
        <Col md={6}>
          <Col className="mb-3">
            <a
              href="mailto: Radhika.Pathak@harbingergroup.com"
              target="_blank"
              className="text-decoration-none footer_email_link "
              rel="noreferrer"
            >
              <i className="fa fa-envelope-open" aria-hidden="true"></i>
              <span className="ms-2">Radhika.Pathak@harbingergroup.com</span>
            </a>
          </Col>

          <Col className="mb-3">
            <a
              href="mailto: Himanshu.Pise@harbingergroup.com"
              target="_blank"
              className="text-decoration-none footer_email_link "
              rel="noreferrer"
            >
              <i className="fa fa-envelope-open" aria-hidden="true"></i>

              <span className="ms-2">Himanshu.Pise@harbingergroup.com</span>
            </a>
          </Col>

          <Col className="mb-3">
            <a
              href="mailto: Tanmay.Deshmukh@harbingergroup.com"
              target="_blank"
              className="text-decoration-none footer_email_link "
              rel="noreferrer"
            >
              <i className="fa fa-envelope-open" aria-hidden="true"></i>

              <span className="ms-2">Tanmay.Deshmukh@harbingergroup.com</span>
            </a>
          </Col>

          <Col className="mb-3">
            <a
              href="mailto: Mahadev.Bansode@harbingergroup.com"
              target="_blank"
              className="text-decoration-none footer_email_link "
              rel="noreferrer"
            >
              <i className="fa fa-envelope-open" aria-hidden="true"></i>

              <span className="ms-2">Mahadev.Bansode@harbingergroup.com</span>
            </a>
          </Col>

          <Col className="mb-3">
            <a
              href="mailto: Amol.Rathod@harbingergroup.com"
              target="_blank"
              className="text-decoration-none footer_email_link "
              rel="noreferrer"
            >
              <i className="fa fa-envelope-open" aria-hidden="true"></i>

              <span className="ms-2">Amol.Rathod@harbingergroup.com</span>
            </a>
          </Col>
        </Col>

        <Col md={4} className="text-start pt-4">
          <Link target="_blank" rel="noreferrer">
            <img
              src="https://static.tumblr.com/b5d2c5b81fbc7be6db1a94b98c7226f5/yylzitm/d5Koeswe7/tumblr_static__2048_v2.jpg"
              className="w-75 h-75"
              alt="Pentagon Group Logo"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Pentagon Logo"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default MainFooter;

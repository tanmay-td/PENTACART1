import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../home/HomePage.css";
const SubFooter = () => {
  return (
    // <div>
    //   <p className="copyright-text">
    //     © 1990 - 2023 Harbinger Group. All Rights Reserved.
    //   </p>
    // </div>

    <Container
      fluid
      className="first-heading fs-6 footer "
      id="contact-us-section"
    >
      <Row className="footer pt-3">
        <Col>
          <p className="text-center ">
            {" "}
            © 1990 - 2023 Team Pentagon. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SubFooter;

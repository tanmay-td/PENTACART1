import "./CustomerSignIn.css";

import { useFormik } from "formik";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

import { CustomerService } from "../../../services/customerservices/CustomerService";
import {
  allFieldErrorToastMessage,
  customerSignInSuccessToastMessage,
  invalidEmailToastMessage,
} from "../../../toastify/AllToastMessages";
import { ProductContext } from "../../../utils/ProductContext";
import { customerLoginValidationSchema } from "../../../validations/customersValidation/CustomerValidation";
import SubFooter from "../../../components/footer/SubFooter";

function CustomerSignIn(props) {
  const { setCustomerDetailsFunction, customerStatusSetter } =
    useContext(ProductContext);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      customerEmail: "",
      customerPassword: "",
    },

    validationSchema: customerLoginValidationSchema,
    onSubmit: (values) => {},
  });
  const navigate = useNavigate();

  const signInWithPhone = () => {
    customerStatusSetter(false);
    // navigate("/customers/phone");
  };

  const checkCustomerLogin = (e) => {
    e.preventDefault();
    try {
      if (values.customerEmail === "" || values.customerPassword === "")
        allFieldErrorToastMessage();
      else {
        console.log("Customer email : ", values.customerEmail);
        console.log("Customer pass : ", values.customerPassword);
        CustomerService(values.customerEmail, values.customerPassword).then(
          (res) => {
            console.log("Main response : ", res);

            if (res.data === "No User Found") {
              invalidEmailToastMessage();
            } else {
              customerStatusSetter(true);
              setCustomerDetailsFunction(res.data.data);
              console.log(res.data);
              console.log("customerToken = ", res.data.token);
              Cookies.set("customerToken", res.data.token);
              customerSignInSuccessToastMessage(
                `${res.data.data.customerFirstName} ${res.data.data.customerLastName}`
              );
              navigate("/customer/home", { replace: true });
            }
          }
        );
      }
    } catch (error) {}
  };

  return (
    <Container fluid className="customer-signin">
      <Container>
        <Row className="">
          <Col>
            <h1 className="text-center text-danger mt-4 fst-italic">
              Customer Login With Email
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center ">
          <Col
            md="6"
            className="align-self-center border border-secondary rounded p-4"
          >
            <Form onSubmit={handleSubmit}>
              <Row className="mb-2 ">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>User name</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="customerEmail"
                      value={values.customerEmail}
                      onChange={handleChange}
                      placeholder="User name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  <p className="text-danger mt-2">{errors.customerEmail}</p>
                </Form.Group>
              </Row>
              <Row className="mb-2 ">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Password</Form.Label>

                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i class="fa fa-key" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      name="customerPassword"
                      value={values.customerPassword}
                      onChange={handleChange}
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  <p className="text-danger mt-2">{errors.customerPassword}</p>
                </Form.Group>
              </Row>

              <Col className="text-center">
                <Link className="text-decoration-none">
                  {errors.customerPassword ? (
                    <Button
                      disabled
                      className="btn tool-tip rounded-pill px-5 disabled-button "
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Enter valid user name and password to login"
                      type="submit"
                      // onClick={checkCustomerLogin}
                    >
                      Login
                    </Button>
                  ) : errors.customerEmail ? null : (
                    <Col>
                      <Button
                        className="btn rounded-pill px-5 mx-3 "
                        type="submit"
                        onClick={checkCustomerLogin}
                      >
                        Login
                      </Button>
                    </Col>
                  )}
                </Link>
              </Col>

              <Col className="text-center mt-3 fw-bold fst-italic">
                <p className="">OR</p>
              </Col>

              {/* <Col className="text-center mt-3">
                <Link to="/customers/phone">
                  <Button
                    variant="info"
                    className="btn rounded-pill px-5  "
                    type="submit"
                    onClick={signInWithPhone}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Login with mobile OTP"
                  >
                    Login With OTP
                  </Button>
                </Link>
              </Col> */}

              <Col className="text-center mt-4">
                <span className="me-2">Don't have a account ?</span>
                <Link
                  to="/customers/customersignup"
                  className="  link-item-create text-decoration-none"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Create new account"
                >
                  Create
                </Link>
              </Col>
            </Form>
          </Col>

          <Col md="6" className="align-self-center">
            <Col className="login-page-second-part-img text-center ">
              <img
                // src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
                src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?w=740&t=st=1679131988~exp=1679132588~hmac=b7284ef454f78e7f3dd89b65ce4599ec0587ddfe7b48d5f401ed7e959dc97789"
                className="image-responsive w-75 h-100"
                alt=""
              ></img>
            </Col>
          </Col>
        </Row>

        {/* Footer */}
        <Row className="">
          <Col>
            <SubFooter/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CustomerSignIn;

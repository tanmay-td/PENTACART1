import "./CustomerSignIn.css";

import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

import { CustomerServiceWithPhone } from "../../../services/customerservices/CustomerService";
import {
  allFieldErrorToastMessage,
  invalidEmailToastMessage,
} from "../../../toastify/AllToastMessages";
import { ProductContext } from "../../../utils/ProductContext";
import { createCustomerValidationSchema } from "../../../validations/customersValidation/CustomerValidation";

function CustomerSignInWithPhone(props) {
  const { setCustomerDetailsFunction, customerStatusSetter, customerStatus } =
    useContext(ProductContext);

  const { handleSubmit, handleChange, touched, handleBlur, values, errors } =
    useFormik({
      initialValues: {
        customerPhone: "",
        customerOTP: "",
      },

      validationSchema: createCustomerValidationSchema,
      onSubmit: (values) => {},
    });
  const navigate = useNavigate();

  const signInWithUsername = () => {
    customerStatusSetter(false);
  };

  let onSignInSubmit = async () => {
    // try {
    //   await CustomerServiceWithPhone(values.customerPhone).then((res) => {
    //     if (res.data === "No User Found") {
    //       invalidEmailToastMessage();
    //     } else {
    //       console.log("User data : ", res.data);
    //       // successToastMessage();
    //       customerStatusSetter(true);
    //       setCustomerDetailsFunction(res.data);
    //       // ...
    //     }
    //     return res;
    //   });
    // } catch (error) {}
  };

  // let verifyOTP = () => {
  //   const code = values.customerOTP;
  //   window.confirmationResult
  //     .confirm("123456")
  //     .then((result) => {
  //       console.log(code);

  //       // User signed in successfully.
  //       const user = result.user;
  //       console.log("users data : ", user);
  //       console.log("Code : ", window.confirmationResult.verificationId, code);

  //       alert("Verification done");
  //       // ...
  //     })
  //     .catch((error) => {
  //       // User couldn't sign in (bad verification code?)
  //       console.log(code);
  //       alert("error");
  //       console.log(error);
  //       // ...
  //     });
  // };

  // const validateOTP = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await CustomerServiceWithPhone(values.customerPhone).then((res) => {
  //       res.data === "No User Found"
  //         ? invalidEmailToastMessage()
  //         : navigate(
  //             "/customer/pentkart",
  //             { replace: true },
  //             // successToastMessage(),
  //             //   customerStatusSetter(true),
  //             setCustomerDetailsFunction(res.data)
  //           );

  //       return res;
  //     });
  //   } catch (error) {}
  // };

  const checkcustomerLogin = async (e) => {
    e.preventDefault();
    try {
      if (values.customerPhone === "") allFieldErrorToastMessage();
      else {
        console.log("Customer email : ", values.customerPhone);
        await CustomerServiceWithPhone(values.customerPhone).then((res) => {
          res.data === "No User Found"
            ? invalidEmailToastMessage()
            : navigate(
                // "/customer/pentkart",
                { replace: true },
                // successToastMessage(),
                customerStatusSetter(true)
                // setCustomerDetailsFunction(res.data)
              );

          return res;
        });
      }
    } catch (error) {}
  };

  return (
    <Container fluid className="customer-signin">
      <Container>
        <Row className="">
          <Col>
            <h1 className="text-center text-danger mt-4 fst-italic">
              Customer Login With OTP
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center ">
          <Col
            md="6"
            className="align-self-center border border-secondary rounded p-4"
          >
            <Form onSubmit={onSignInSubmit}>
              <Col id="recaptcha-container"></Col>

              <Col id="recaptcha-container"></Col>
              {customerStatus ? (
                <Row className="mb-2 ">
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>OTP</Form.Label>

                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i class="fa fa-key" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        name="customerOTP"
                        value={values.customerOTP}
                        onChange={handleChange}
                        placeholder="OTP"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                    <p className="text-danger mt-2">{errors.customerOTP}</p>
                  </Form.Group>

                  <Col className="text-center">
                    <Link className="text-decoration-none">
                      {errors.customerOTP ? (
                        <Button
                          disabled
                          className="btn rounded-pill px-5  "
                          type="submit"
                        >
                          Validate OTP
                        </Button>
                      ) : (
                        <Col>
                          <Button
                            className="btn rounded-pill px-5 mx-3 "
                            type="submit"
                            // onClick={verifyOTP}
                          >
                            Validate OTP
                          </Button>
                        </Col>
                      )}
                    </Link>
                  </Col>
                </Row>
              ) : (
                <Row className=" ">
                  <Col md={12} className="mb-4 ">
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Email </Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          <span>
                            <i
                              class="fa fa-envelope-open"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="customerEmail"
                          value={values.customerPhone}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Email Id"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                      </InputGroup>
                      {errors.customerEmail && touched.customerEmail ? (
                        <p className="text-danger mt-2">
                          {errors.customerEmail}
                        </p>
                      ) : null}
                    </Form.Group>
                  </Col>
                  <Col className="text-center">
                    <Link className="text-decoration-none">
                      {errors.customerEmail ? (
                        <Button
                          disabled
                          className="btn rounded-pill px-5 disabled-button  "
                          type="submit"
                        >
                          Send OTP
                        </Button>
                      ) : (
                        <Col>
                          <Button
                            className="btn rounded-pill px-5 mx-3 "
                            type="submit"
                            onClick={onSignInSubmit}
                          >
                            Send OTP
                          </Button>
                        </Col>
                      )}
                    </Link>
                  </Col>
                </Row>
              )}

              {/* <Col className="text-center">
                <Link className="text-decoration-none">
                  {errors.customerPhone ? (
                    <Button
                      disabled
                      className="btn rounded-pill px-5  "
                      type="submit"
                    >
                      Send OTP
                    </Button>
                  ) : (
                    <Col>
                      <Button
                        className="btn rounded-pill px-5 mx-3 "
                        type="submit"
                        onClick={checkcustomerLogin}
                      >
                        Send OTP
                      </Button>
                    </Col>
                  )}
                </Link>
              </Col> */}

              <Col className="text-center mt-3 fw-bold fst-italic">
                <p className="">OR</p>
              </Col>

              <Col className="text-center mt-3">
                <Link to="/customers/signin">
                  <Button
                    variant="info"
                    className="btn rounded-pill px-5  "
                    type="submit"
                    onClick={signInWithUsername}
                  >
                    Login With Username
                  </Button>
                </Link>
              </Col>
              <Col className="text-center mt-4">
                <span className="me-2">Don't have a account ?</span>
                <Link
                  to="/customers/customersignup"
                  className="  link-item-create text-decoration-none"
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
      </Container>
    </Container>
  );
}

export default CustomerSignInWithPhone;

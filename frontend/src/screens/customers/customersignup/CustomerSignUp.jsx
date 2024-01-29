import "./CustomerSignUp.css";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

import { CreateCustomerService } from "../../../services/customerservices/CreateCustomerService";
import { GetCustomerByEmailService } from "../../../services/customerservices/CustomerService";
import {
  allFieldErrorToastMessage,
  customerAlreadyRegisteredToastMessage,
  customerSignUpSuccessToastMessage,
} from "../../../toastify/AllToastMessages";
import { createCustomerValidationSchema } from "../../../validations/customersValidation/CustomerValidation";
import SubFooter from "../../../components/footer/SubFooter";

function CustomerSignUp() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  // const [customerFirstName, setCustomerFirstName] = useState("");
  // const [customerLastName, setCustomerLastName] = useState("");
  // const [customerPhone, setCustomerPhone] = useState("");
  // const [customerEmail, setCustomerEmail] = useState("");
  // const [customerPassword, setCustomerPassword] = useState("");
  // const [customerAddress, setCustomerAddress] = useState("");

  // const customerRegistrationValidation = () => {
  //   if (
  //     customerFirstName === "" ||
  //     customerLastName === "" ||
  //     customerPhone === "" ||
  //     customerEmail === "" ||
  //     customerPassword === "" ||
  //     customerAddress === ""
  //   ) {
  //     return false;
  //   }

  //   return true;
  // };

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        customerFirstName: "",
        customerLastName: "",
        customerPhone: "",
        customerEmail: "",
        customerPassword: "",
        customerAddress: "",
      },

      validationSchema: createCustomerValidationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const registerCustomer = async (event) => {
    event.preventDefault();

    if (
      values.customerFirstName === "" ||
      values.customerLastName === "" ||
      values.customerPhone === "" ||
      values.customerEmail === "" ||
      values.customerPassword === "" ||
      values.customerAddress === ""
    ) {
      // toast message
      allFieldErrorToastMessage();
      // return toast("Please enter all fields");
      // return ("Please enter all fields");
    }
    try {
      await GetCustomerByEmailService(values.customerEmail).then((res) => {
        if (res.data.customerEmail === values.customerEmail) {
          customerAlreadyRegisteredToastMessage();

          navigate("/customers/signin");
        } else {
          try {
            console.log("Values : ", values);
            CreateCustomerService(values).then((res) => {
              customerSignUpSuccessToastMessage(
                `${values.customerFirstName} ${values.customerLastName}`
              );
              navigate("/customers/signin");
            });
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <Container fluid className="">
      <Container>
        <Row className="">
          <Col>
            <h1 className="text-center text-danger my-4 fst-italic">
              Customer SignUp
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center w-75 m-auto  ">
          <Col className="align-self-center border border-secondary rounded p-3 mb-4">
            <Form onSubmit={handleSubmit}>
              <Row className="">
                <Col md={6} className="mb-4 ">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>First Name</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="customerFirstName"
                        value={values.customerFirstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="First Name"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                    {errors.customerFirstName && touched.customerFirstName ? (
                      <p className="text-danger mt-2">
                        {errors.customerFirstName}
                      </p>
                    ) : null}
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4 ">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="customerLastName"
                        value={values.customerLastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Last Name"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                    {errors.customerLastName && touched.customerLastName ? (
                      <p className="text-danger mt-2">
                        {errors.customerLastName}
                      </p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>

              <Row className=" ">
                <Col md={6} className="mb-4 ">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="customerPhone"
                        value={values.customerPhone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                    {errors.customerPhone && touched.customerPhone ? (
                      <p className="text-danger mt-2">{errors.customerPhone}</p>
                    ) : null}
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4 ">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Address</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="customerAddress"
                        value={values.customerAddress}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Address"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                    {errors.customerAddress && touched.customerAddress ? (
                      <p className="text-danger mt-2">
                        {errors.customerAddress}
                      </p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-2 ">
                <Col md={6} className="mb-4 ">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Email Id</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="customerEmail"
                        value={values.customerEmail}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Email Id"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                    {errors.customerEmail && touched.customerEmail ? (
                      <p className="text-danger mt-2">{errors.customerEmail}</p>
                    ) : null}
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-2 ">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i class="fa fa-key" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="customerPassword"
                        value={values.customerPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                    {errors.customerPassword && touched.customerPassword ? (
                      <p className="text-danger mt-2">
                        {errors.customerPassword}
                      </p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>

              <Col className="text-center">
                <Link className="text-decoration-none">
                  {/* {errors.customerFirstName ? null : errors.customerLastName ? null : errors.customerAddress ? null : errors.customerPhone ? null : errors.customerEmail ? null : errors.customerPassword ? null : (
                    <Button
                      className="btn rounded-pill px-5  "
                      type="submit"
                      onClick={registerCustomer}
                    >
                      Sign up
                    </Button>
                  )} */}

                  {!errors.customerFirstName &&
                  !errors.customerLastName &&
                  !errors.customerAddress &&
                  !errors.customerPhone &&
                  !errors.customerEmail &&
                  !errors.customerPassword ? (
                    <Button
                      className="btn rounded-pill px-5  "
                      type="submit"
                      onClick={registerCustomer}
                    >
                      Sign up
                    </Button>
                  ) : (
                    <Button
                      className="btn rounded-pill px-5 disabled-button"
                      disabled
                    >
                      Sign up
                    </Button>
                  )}
                </Link>
              </Col>

              <Col className="text-center mt-4">
                <span className="pe-2">Already registered ?</span>
                <Link
                  to="/customers/signin"
                  className="  link-item-create text-decoration-none"
                >
                  Login
                </Link>
              </Col>
            </Form>
          </Col>
        </Row>

        {/* Footer */}
        <Row className="">
          <Col>
            <SubFooter />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CustomerSignUp;

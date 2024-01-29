import "./AdminLogin.css";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import { IconName } from "react-icons/fa";
import { AdminLoginService } from "../../services/AdminServices/AdminLoginService";
import {
  adminLoginSuccessToastMessage,
  allFieldErrorToastMessage,
  noAdminFoundToastMessage,
} from "../../toastify/AllToastMessages";
import { ProductContext } from "../../utils/ProductContext";
import { adminValidationSchema } from "../../validations/adminValidation/AdminValidation";
import SubFooter from "../../components/footer/SubFooter";

function AdminLogin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const {
    cart,
    setAdminDetailsFunction,
    setAdminStatus,
    adminStatus,
    adminStatusSetter,
  } = useContext(ProductContext);

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      validationSchema: adminValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const navigate = useNavigate();

  const checkAdminLogin = async (e) => {
    e.preventDefault();

    try {
      if (values.email === "" || values.password === "") {
        // alert("Please enter email and password..!");
        allFieldErrorToastMessage();
      } else {
        await AdminLoginService(values.email, values.password).then((res) => {
          // console.log("response : ", res.data.token);
          res.data === "No Admin Found"
            ? noAdminFoundToastMessage()
            : navigate(
                "/admin/home",
                { replace: true },
                adminStatusSetter(true),
                setAdminDetailsFunction(res.data.data),
                Cookies.set("adminToken", res.data.token),
                adminLoginSuccessToastMessage()
              );
        });
      }
    } catch (error) {}
  };
  // navigate("/showallproducts");
  return (
    <Container fluid className="admin-login-main-container">
      {/* <MainNavigation /> */}

      <Container fluid>
        <Row className="">
          <Col>
            <h1 className="text-center text-danger mt-3 fst-italic">
              Admin Login
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center ">
          <Col
            md="6"
            className="align-self-center border border-secondary rounded p-5"
          >
            <Form onSubmit={handleSubmit}>
              <Row className="mb-5 ">
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
                      type="text"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="User name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  {errors.email && touched.email ? (
                    <p className="text-danger mt-2"> {errors.email}</p>
                  ) : null}
                </Form.Group>
              </Row>
              <Row className="mb-5 ">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Password</Form.Label>

                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i class="fa fa-key" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  {errors.password || touched.password ? (
                    <p className="text-danger mt-2">{errors.password}</p>
                  ) : null}
                </Form.Group>
              </Row>

              <Col className="text-center">
                <Link className="text-decoration-none">
                  {errors.password || errors.email ? (
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
                  ) : errors.email ? null : (
                    <Col>
                      <Button
                        className="btn submit-button rounded-pill px-5 mx-3 "
                        type="submit"
                        onClick={checkAdminLogin}
                      >
                        Login
                      </Button>
                    </Col>
                  )}
                </Link>
              </Col>
            </Form>
          </Col>

          <Col md="6" className="align-self-center">
            <Col className="login-page-second-part-img text-center ">
              <img
                // src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
                src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1679131832~exp=1679132432~hmac=c41dc9620af34bf3e07d55a29c564da375e09d27ebaacf8ca8ec0c4b8e26153e"
                className="image-responsive w-75 h-50"
                alt=""
              ></img>
            </Col>
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

export default AdminLogin;

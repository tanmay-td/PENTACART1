import React, { useContext } from "react";
import "./CustomerProfile.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ProductContext } from "../../utils/ProductContext";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";


export default function CustomerPro() {
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
    <section className=" " style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 main-div">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0 ">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5" className="">
                    {customerDetails.customerFirstName}{" "}
                    {customerDetails.customerLastName}
                  </MDBTypography>
                </MDBCol>

                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {customerDetails.customerEmail}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          {customerDetails.customerPhone}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <hr className="mt-0 mb-4 mt-2" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">
                          {customerDetails.customerAddress}
                        </MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Social Media</MDBTypography>
                        <MDBCardText className="text-muted">
                          <div className="d-flex justify-content-start">
                            <Tooltip title="Facebook" arrow>
                              <Link
                                className=" "
                                to="https://www.facebook.com/"
                              >
                                <i
                                  className="social-media-icon fa  fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </Tooltip>

                            <Tooltip title="Twitter" arrow>
                              <Link
                                className="ms-3 "
                                to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                              >
                                <i
                                  className="social-media-icon fa  fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </Tooltip>

                            <Tooltip title="Instagram" arrow>
                              <Link
                                className="ms-3 "
                                to="https://www.instagram.com/"
                              >
                                <i
                                  className="social-media-icon fa  fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </Tooltip>

                            <Tooltip title="LinkedIn" arrow>
                              <Link
                                className="ms-3 "
                                to="https://www.linkedin.com/"
                              >
                                <i
                                  className="social-media-icon fa  fa-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </Tooltip>
                          </div>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

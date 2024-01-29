import './CreateProductBrand.css';

import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useEffect,useContext } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogin from "../../../admin/adminlogin/AdminLogin";
import { ProductContext } from "../../../utils/ProductContext";

import { brandInsertedToastMessage, emptyBrandToastMessage } from '../../../toastify/AllToastMessages';
import { BASE_URL } from '../../../utils/BaseUrl';
import { BrandValidationSchema } from '../../../validations/brandsValidation/BrandValidation';
import ShowAllProductBrands from '../showallproductbrands/ShowAllProductBrands';

const CreateProductBrand = () => {
  const navigate = useNavigate();

// Using this Admin Status for Route protection 
const {
  adminStatus,
} = useContext(ProductContext);


  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate("/brands");
  };
  const handleShow = () => setShow(true);

  const formInitialValues = {
    brandName: "",
    brandImageUrl: "",
  };

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: formInitialValues,

      validationSchema: BrandValidationSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  const createBrand = () => {
    if (values.brandName === "" || values.brandImageUrl === "") {
      emptyBrandToastMessage();
    } else {
      axios
        .post(BASE_URL + "productbrands", {
          brandName: values.brandName,
          brandImageUrl: values.brandImageUrl,
        })
        .then((response) => {
          brandInsertedToastMessage();
          navigate("/brands", { replace: true });
        });
    }
  };

  return (
    <>
    {adminStatus?(
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <ShowAllProductBrands />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="">
              <Form.Group
                as={Col}
                md="12"
                className="mb-4 "
                controlId="validationCustom01"
              >
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Brand Name"
                  name="brandName"
                  onChange={handleChange}
                  value={values.brandName}
                  className="rounded-pill"
                />
                <p className="text-danger mt-2">{errors.brandName}</p>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                className="mb-4 "
                controlId="validationCustom01"
              >
                <Form.Label>Brand Image Url</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Brand Image Url"
                  name="brandImageUrl"
                  onChange={handleChange}
                  value={values.brandImageUrl}
                  className="rounded-pill"
                />
                {console.log("handle chage : ", values.brandImageUrl)}
                <p className="text-danger mt-2">{errors.brandImageUrl}</p>
              </Form.Group>

              <Form.Group className="text-center create-button my-3">
                <Link>
                  {!errors.brandName && !errors.brandImageUrl ? (
                    <Button
                      onClick={createBrand}
                      type="submit"
                      variant="info"
                      className="rounded-pill cursor-not-allowed"
                    >
                      Create Brand
                    </Button>
                  ) : (
                    <Button
                      disabled
                      type="submit"
                      className="rounded-pill disabled-submit-button"
                    >
                      Create Brand
                    </Button>
                  )}
                  {/* {console.log(category)} */}
                </Link>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    ):(<AdminLogin />)}
    </>
  );
};

export default CreateProductBrand;

import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useEffect ,useContext ,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogin from '../../../admin/adminlogin/AdminLogin';
import { ProductContext } from "../../../utils/ProductContext";

import { categoryInsertedToastMessage, emptyCategoryToastMessage } from '../../../toastify/AllToastMessages';
import { BASE_URL } from '../../../utils/BaseUrl';
import { CategoryValidationSchema } from '../../../validations/categoriesValidation/CategoryValidation';
import ShowAllProductCategories from '../showallproductcategories/ShowAllProductCategories';


const CreateProductCategory = () => {
  const navigate = useNavigate();


  // Using this Admin Status for Route protection 
  const {
    adminStatus,
  } = useContext(ProductContext);

  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate("/categories");
  };
  const handleShow = () => setShow(true);

  const formInitialValues = {
    categoryName: "",
    categoryImageUrl: "",
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: formInitialValues,
    validationSchema: CategoryValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const createCategory = () => {
    console.log(values.categoryName);
    if (values.categoryName === "" || values.categoryImageUrl === "") {
      emptyCategoryToastMessage();
    } else {
      axios
        .post(BASE_URL + "productcategories", {
          categoryName: values.categoryName,
          categoryImageUrl: values.categoryImageUrl,
        })
        .then((response) => {
          categoryInsertedToastMessage();
          navigate("/categories", { replace: true });
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

      <ShowAllProductCategories />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product Category</Modal.Title>
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
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Category name"
                  name="categoryName"
                  value={values.categoryName}
                  onChange={handleChange}
                  className="rounded-pill"
                />
                <p className="text-danger mt-2">{errors.categoryName}</p>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                className="mb-4 "
                controlId="validationCustom01"
              >
                <Form.Label>Category Image Url</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Category Image Url"
                  name="categoryImageUrl"
                  value={values.categoryImageUrl}
                  onChange={handleChange}
                  className="rounded-pill"
                />
                <p className="text-danger mt-2">{errors.categoryImageUrl}</p>
              </Form.Group>

              <Form.Group className="text-center create-button my-3">
                <Link>
                  {!errors.categoryName || !errors.categoryImageUrl? (
                    <Button
                      onClick={createCategory}
                      type="submit"
                      variant="outline-info"
                      className="rounded-pill"
                    >
                      Create Category
                    </Button>
                  ) : null}
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

export default CreateProductCategory;

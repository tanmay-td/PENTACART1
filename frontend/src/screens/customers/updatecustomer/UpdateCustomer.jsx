// /* eslint-disable no-sequences */
// /* eslint-disable no-unused-expressions */
// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import Row from "react-bootstrap/Row";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import ShowAllCustomers from "../showallcustomers/ShowAllCustomers";

// function UpdateCustomer() {
//   const navigate = useNavigate();
//   const [show, setShow] = useState(true);
//   const [validated, setValidated] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [customers, setCustomer] = useState({
//     customerFirstName: "",
//     customerLastName: "",
//     customerPhone: "",
//     customerEmail: "",
//     customerPassword: "",
//     customerAddress: "",
//   });

//   const [customerFirstName, setCustomerFirstName] = useState("");
//   const [customerLastName, setCustomerLastName] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPassword, setCustomerPassword] = useState("");
//   const [customerAddress, setCustomerAddress] = useState("");

//   //   const productId = useParams();
//   //   console.log(`product Id : ${productId}`);

//   const { id } = useParams();
//   console.log(`Id of customer : ${id}`)

//   const getCustomerById = () => {
//     axios.get(`http://localhost:4040/customers/${id}`).then((response) => {
//       setCustomer(response.data),
//         setCustomerFirstName(response.data.customerFirstName),
//         setCustomerLastName(response.data.customerLastName),
//         setCustomerPhone(response.data.customerPhone),
//         setCustomerEmail(response.data.customerEmail),
//         setCustomerPassword(response.data.customerPassword),
//         setCustomerAddress(response.data.customerAddress);

//       console.log(response.data);
//     });
//   };

//   const updateCustomer = () => {
//     const data = {
//       customerFirstName,
//       customerLastName,
//       customerPhone,
//       customerEmail,
//       customerPassword,
//       customerAddress,
//     };
//     console.log(`Customer data : ${data}`);

//     axios
//       .put(`http://localhost:4040/customers/${id}`, data)
//       .then((response) => console.log(response.data)),
//       navigate("/customers/showallcustomers");
//   };

//   useEffect(() => {
//     getCustomerById();
//   }, []);
//   // get current products

//   return (
//     <div>
//       <ShowAllCustomers />

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Customer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Row className="">
//               <Form.Group
//                 as={Col}
//                 md="6"
//                 className="mb-4 "
//                 controlId="validationCustom01"
//               >
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   placeholder="First Name"
//                   name="customerFirstName"
//                   className="rounded-pill"
//                   defaultValue={customers.customerFirstName}
//                   onChange={(e) => setCustomerFirstName(e.target.value)}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group
//                 as={Col}
//                 md="6"
//                 className="mb-4"
//                 controlId="validationCustom02"
//               >
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   className="rounded-pill"
//                   name="customerLastName"
//                   placeholder="Last Name"
//                   defaultValue={customers.customerLastName}
//                   onChange={(e) => setCustomerLastName(e.target.value)}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group
//                 as={Col}
//                 md="6"
//                 className="mb-4"
//                 controlId="validationCustom02"
//               >
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   placeholder="Phone Number"
//                   name="customerPhone"
//                   className="rounded-pill"
//                   defaultValue={customers.customerPhone}
//                   onChange={(e) => setCustomerPhone(e.target.value)}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group
//                 as={Col}
//                 md="6"
//                 className="mb-4"
//                 controlId="validationCustom02"
//               >
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   placeholder="Address"
//                   name="customerAddress"
//                   className="rounded-pill"
//                   defaultValue={customers.customerAddress}
//                   onChange={(e) => setCustomerAddress(e.target.value)}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group
//                 as={Col}
//                 md="6"
//                 className="mb-4"
//                 controlId="validationCustom02"
//               >
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   required
//                   type="email"
//                   placeholder="Email"
//                   name="customerEmail"
//                   className="rounded-pill"
//                   defaultValue={customers.customerEmail}
//                   onChange={(e) => setCustomerEmail(e.target.value)}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group
//                 as={Col}
//                 md="6"
//                 className="mb-4"
//                 controlId="validationCustom02"
//               >
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   required
//                   type="password"
//                   placeholder="Password"
//                   name="customerPassword"
//                   defaultValue={customers.customerPassword}
//                   onChange={(e) => setCustomerPassword(e.target.value)}
//                   className="rounded-pill"
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="text-center create-button my-3">
//                 <Link>
//                   <Button
//                     type="submit"
//                     variant="outline-info"
//                     className="rounded-pill"
//                     onClick={updateCustomer}
//                   >
//                     Update Product
//                   </Button>
//                   {/* {console.log(product)} */}
//                 </Link>
//               </Form.Group>
//             </Row>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default UpdateCustomer;

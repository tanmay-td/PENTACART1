import "./CategoriesCard.css";
import Carousel from "react-elastic-carousel";

import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ShowProductsByCategories from "../../displayproductsbycategory/ShowProductsByCategories";
import { ProductContext } from "../../../utils/ProductContext";
import Tooltip from '@mui/material/Tooltip'

const CategoriesCard = () => {
  const { customerStatus } = useContext(ProductContext);
  const [myCategory, setMyCategory] = useState([]);
  const [isError, setIsError] = useState("");

  const [productId, setProductId] = useState("642011e7a23ef3b12429ec05");

  function setIdfunction(_id) {
    setProductId(_id);
    console.log("Home page", setProductId);
  }

  const loadAllCategories = () => {
    axios
      .get(`http://localhost:4040/productcategories`)
      .then((response) => setMyCategory(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadAllCategories();
  }, []);

  // React elastic carousel
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 624, itemsToShow: 2 },
    { width: 768, itemsToShow: 6 },
    { width: 1200, itemsToShow: 6 },
    { width: 1500, itemsToShow: 5 },
  ];

  return (
    <Container fluid>
      {customerStatus ? (
        <Row className="justify-content-center mb-2">
          <Carousel breakPoints={breakPoints}>
            {myCategory.map((data, key) => {
              return (
                <Col
                  key={key}
                  className="my-4 customer-home-card text-center py-3 mx-3 mb-4"
                  onClick={(e) => {
                    setIdfunction(data._id);
                  }}
                >
                  <Link className="text-decoration-none" onClick={(e) => {}}>
                    <Tooltip title="View all products" arrow>
                      <img
                        src={data.categoryImageUrl}
                        alt="category"
                        className="image-fluid"

                        // onClick={(e) => setElectronics(true)}
                      />
                    </Tooltip>
                    <h5 className="mt-3 text-center card-title">
                      {data.categoryName}
                    </h5>
                  </Link>
                </Col>
              );
            })}
          </Carousel>
        </Row>
      ) : (
        <Row className="justify-content-center mb-2">
          {myCategory.slice(0, 6).map((data, key) => {
            return (
              <Col
                key={key}
                className="my-4 customer-home-card text-center py-3 mx-3 mb-4"
                md={3}
                onClick={(e) => {
                  setIdfunction(data._id);
                }}
              >
                <Link className="text-decoration-none" onClick={(e) => {}}>
                  <img
                    src={data.categoryImageUrl}
                    alt="category"
                    className="image-fluid"

                    // onClick={(e) => setElectronics(true)}
                  />
                  <h5 className="mt-3 text-center card-title">
                    {data.categoryName}
                  </h5>
                </Link>
              </Col>
            );
          })}
        </Row>
      )}

      <Row>
        <Col className="mx-2 align-self-center">
          <ShowProductsByCategories id={productId} />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesCard;

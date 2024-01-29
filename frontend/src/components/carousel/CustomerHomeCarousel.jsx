import React, { useContext } from "react";
import styled from "styled-components";
import "./CustomerHomeCarousel.css";
import { ProductContext } from "../../utils/ProductContext";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const heroImage =
  "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-simple-business-e-commerce-web-page-image_20833.jpg";

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-image: url(${heroImage});
  border-radius: 10px;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: 000;
`;

const LogoContainer = styled.div`
  display: inline-block;
  margin-bottom: 1.5rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;

const CustomerHomeCarousel = () => {
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
    <HeroContainer className="my-2 py-4">
      <InfoContainer>
        <LogoContainer>
          <img
            src="https://www.cmarix.com/blog/wp-content/uploads/2020/07/The-best-eCommerce-platform-for-Food-delivery.png"
            alt="PentKART logo"
          />
        </LogoContainer>
        <h1 className="main-heading fs-1 py-1 ">
          Welcome to PentKART,
          <Tooltip title="View profile" arrow>
            <Link
              to="/customers/profile"
              className="ps-2 user-profile-link"
              // data-bs-toggle="tooltip"
              // data-bs-placement="top"
              // title="View profile"
            >
              <span className="username-heading ">
                {customerDetails.customerFirstName}
              </span>
            </Link>
          </Tooltip>
        </h1>
        <p className="sub-heading">
          We offer a wide range of products for all your shopping needs, from
          clothing to electronics and more. Shop our latest arrivals and take
          advantage of our great deals and discounts.
        </p>
      </InfoContainer>
    </HeroContainer>
  );
};

export default CustomerHomeCarousel;

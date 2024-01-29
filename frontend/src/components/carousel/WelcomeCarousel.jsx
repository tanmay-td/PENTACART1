import React from "react";
import Carousel from "react-bootstrap/Carousel";

const WelcomeCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-image w-100  object-fit-cover d-block"
          //   src="https://static.tumblr.com/b5d2c5b81fbc7be6db1a94b98c7226f5/yylzitm/d5Koeswe7/tumblr_static__2048_v2.jpg"
          src="https://images.hindustantimes.com/tech/img/2021/06/10/960x540/image_-_2021-06-10T151159.571_1623318123184_1623318130362.jpg"
          alt="first slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-image w-100 object-fit-cover d-block"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c9c2e9a4-bb4c-45ef-a578-8f2cdd301cb8.__CR0,0,1464,600_PT0_SX1464_V1___.png"
          alt="second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-image w-100  object-fit-cover d-block"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9c3baba8-8fcd-4f38-ba39-8211d4db21ae.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="carousel-image w-100  object-fit-cover d-block"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/6f2707e1-77cd-40d2-ae5d-83e90894a025.__CR0,0,970,600_PT0_SX970_V1___.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default WelcomeCarousel;

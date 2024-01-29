import axios from "axios";
import React from "react";
import { useEffect, useNavigate, useParams, useState } from "react";

const GetSingleProductService = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productImageUrl: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productStockQuantity: "",
    productOffers: "",
  });

  const [productImageUrl, setproductImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productStockQuantity, setproductStockQuantity] = useState("");
  const [productOffers, setproductOffers] = useState("");

  //   const productId = useParams();
  //   console.log(`product Id : ${productId}`);

  const { id } = useParams();

  const getProductById = () => {
    axios.get(`http://localhost:4040/products/${id}`).then((response) => {
      // eslint-disable-next-line no-unused-expressions, no-sequences
      setProduct(response.data),
        setproductImageUrl(response.data.productImageUrl),
        setProductName(response.data.productName),
        setproductDescription(response.data.productDescription),
        setproductPrice(response.data.productPrice),
        setproductStockQuantity(response.data.productStockQuantity),
        setproductOffers(response.data.productOffers);
    });
  };

  useEffect(() => {
    getProductById();
  }, []);
};

export default GetSingleProductService;

import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setIsLoading(false);
      });
  }, [productId])

  return (
    <LayOut>
      {isLoading ? (
        <p className={classes.loading}>Loading product...</p> 
      ) : (
        <ProductCard product={product} />
      )}
    </LayOut>
  );
};

export default ProductDetail;


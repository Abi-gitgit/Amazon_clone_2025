import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
      });
  }, [productId]);

  return (
    <LayOut>
      <div className={classes.detail_container}>
        {product?.id ? (
          <ProductCard product={product} />
        ) : (
          <p>Loading product...</p>
        )}
      </div>
    </LayOut>
  );
};

export default ProductDetail;

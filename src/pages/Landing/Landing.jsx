import React from 'react'
import LayOut from '../../components/LayOut/LayOut';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import Carousel from "../../components/Carousel/CarouselEffect";



const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing
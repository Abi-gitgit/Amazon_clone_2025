import React from 'react'
import {Carousel} from "react-responsive-carousel"
import {img} from "../img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Classes from  "./Carousel.module.css"



const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
         
          img.map((imageItemLink, index) => (
            <div key={index}>
              <img src={imageItemLink} alt={`carousel-image-${index}`} />
            </div>
          ))
        }
      </Carousel>
      <div className={Classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect
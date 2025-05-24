import React from 'react'
import classes from "./category.module.css"

const CategoryCard = ({data}) => {
  return (
    <div className={classes.category}>
        <a href="">
            <span>
                <h1>{data.title}</h1>
            </span>
            <img src={data.imgLink} alt="" />
            <p>shop now</p>
        </a>

    </div>
  )
}

export default CategoryCard



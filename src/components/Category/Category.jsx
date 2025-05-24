
import React from "react";
import { CategoryImage } from "./CategoryFullInFos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css"; 

const Category = () => {
  return (
    <section className={classes.category_container}>
      {CategoryImage.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Category;

import React from 'react';
import './Categories.css';
import { Link } from "react-router-dom";

const Categories = (props) => {
  const { categories } = props;
  return (
    <section className="categories-footer-list">
      {categories.map(category => {
        return (
          <Link key={category._id} className="category-footer-list-item" to={`category/${category.title}`} >{category.title}</Link>
        );
      })}
    </section>
  )
};

export default Categories;
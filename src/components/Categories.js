import React from 'react';
import './Categories.css';
import { Link } from "react-router-dom";

const Categories = (props) => {
  const { categories } = props;
  return (
    <section className="categories-list">
      {categories.map(category => {
        return (
          <ul key={category._id}>
            <Link to={`category/${category.title}`} >{category.title}</Link>
          </ul>
        );
      })}
    </section>
  )
};

export default Categories;
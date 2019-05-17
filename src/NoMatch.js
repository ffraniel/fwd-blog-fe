import React from 'react';
import './NoMatch.css';
import { Link } from "react-router-dom";


const NoMatch = () => {
  return (
    <section className="no-match">
      <h1>404 - Sorry, we couldn't find the page you were looking for. </h1>
      <Link className="button-home" to="/">Home</Link>
    </section>
  )
};

export default NoMatch;
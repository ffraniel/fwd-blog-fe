import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="nav" role="navigation">
      <Link to='/' >Home</Link>
      <Link to='about' >About</Link>
      <a href='https://franwebdev.uk/'>franwebdev.uk</a>
    </nav>
  )
};

export default Header;
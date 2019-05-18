import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="nav" role="navigation">
      <Link className="nav-link" to='/' >
        <h3 className="title">Sometimes I code and Think <br/> and Sometimes I Just Code</h3>
      </Link>
      <Link className="nav-link" to='/about' >About</Link>
      <a className="nav-link" href='https://franwebdev.uk/'>franwebdev.uk</a>
    </nav>
  )
};

export default Header;
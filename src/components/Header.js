import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = (props) => {
  const {mobNavOpen, setMobNavOpen} = props;

  return (
    <section className="header">
      <nav 
        className="nav" 
        role="navigation">
        <section 
          className="mobile-nav-burger"
          onClick={()=>{
            setMobNavOpen(!mobNavOpen);
          }} >
          <span></span>
          <span></span>
          <span></span>
        </section> 
        <section className="dekstop-nav">
          <Link className="nav-link" to='/'>Home</Link>
          <a className="nav-link" href='https://franwebdev.uk/'>franwebdev.uk</a>
        </section>
        <Link className="nav-link-title" to='/' >
          <h3 className="title">Sometimes I Code and Think <br/> and Sometimes I Just Code</h3>
        </Link>
      </nav>
    </section>
  )
};

export default Header;
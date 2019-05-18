import React from "react";
import "./MobNav.css";
import { Link } from "react-router-dom";

const MobNav = props => {
  const { mobNavOpen, setMobNavOpen } = props;
  let navClass = mobNavOpen ? 'mob-nav open' : 'mob-nav closed';

  const closeNav = () => {
    setMobNavOpen(false);
  };

  return (
    <section className={navClass}>
      <Link className="mob-nav-link" to="/" onClick={closeNav} >Home</Link>
      <Link className="mob-nav-link" to="/about" onClick={closeNav} >About</Link>
      <a className="mob-nav-link" href="https://franwebdev.uk/" onClick={closeNav}>franwebdev.uk</a>
      <button
        onClick={() => {
          setMobNavOpen(!mobNavOpen);
        }}
        className="mob-nav-link close-nav"
      >x</button>
    </section>
  );
};

export default MobNav;

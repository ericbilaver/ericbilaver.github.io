import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-left">
          <Link to="/">ERIC BILAVER</Link>
        </div>
        <div className="header-right">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header;

/*
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">ERIC BILAVER</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
*/

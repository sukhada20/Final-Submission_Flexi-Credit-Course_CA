import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">STAYLY</div>
    <div className="nav-links">
      <Link to="/">Browse</Link>
      <Link to="/list-property">List Property</Link>
      <Link to="/find-roommate">Find Roommate</Link>
      <Link to="/signin" className="btn-primary">Sign In</Link>
    </div>
  </nav>
);

export default Navbar;

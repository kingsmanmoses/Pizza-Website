import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav>
        <NavLink to="/" className="navlink">
          KPIZZA
        </NavLink>
        <div className="navicon" onClick={toggle}>
          <p>Menu</p>
          <FaPizzaSlice className="bars" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './side.css';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <aside className={isOpen ? 'sidecontainer active' : 'sidecontainer'}>
        <div className="icon" onClick={toggle}>
          <FaTimes className="closeicon" />
        </div>
        <div className="sidebarmenu">
          <Link to="/" className="sidelink">
            Pizzas
          </Link>
          <Link to="/" className="sidelink">
            Desserts
          </Link>
          <Link to="/" className="sidelink">
            Full menu
          </Link>
        </div>
        <div className="sidebtnwrap">
          <Link to="/" className="sidebtn">
            Order Now
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

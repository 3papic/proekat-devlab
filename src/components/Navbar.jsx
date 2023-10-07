import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-0 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQEuupNBqLpL4Q/company-logo_100_100/0/1647515807936?e=1704931200&v=beta&t=sMUns34WqEsq8-LbD3PbcwxPJ6EsB00nNm0uiGSGneI"
            alt="Your Logo"
            className="w-20 h-20" 
          />
        </Link>

        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="hover:text-gray-400">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="hover:text-gray-400">
              <FaShoppingCart />
            </NavLink>
          </li>
          <li>
            <Link to="/user-profile" className="hover:text-gray-400">
              <FaUser />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

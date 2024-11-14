import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container flex">
        <Link to="/" className="text-2xl font-bold w-[300px]">
          Ankit Verma
        </Link>

        <div className="flex w-full items-center justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-gray-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
